
//表单验证
var form = (function(http){
    var strategies = {
          //验证是否为空
        isEmpty:function(value,errorMsg){
            var str = value.replace(/(^\s*)|(\s*$)/g, '');//去除空格;
            if(str===''||str==undefined||str==null)
            {
                return errorMsg
            }
        },
         //验证最小长度
        minLength:function(value,length,errorMsg){
            if(value.length<length)
            {
                return errorMsg
            }
        },
       //验证手机号码格式
        isMobile:function(value,errorMsg){
            var reg = /(^1[3|5|8][0-9]{9}$)/;
            if(!reg.test(value))
            {
                return errorMsg
            }    
        },
        //验证身份证格式
        isCard:function(value,errorMsg){
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!reg.test(value))
            {
                return errorMsg
            }
        }
    }

    //存放全局验证方法
    var Validator = function(){
        this.cache = [];
    }

    Validator.prototype.add = function(dom,rules){
        var self = this;
        for(var i =0,rules;rule=rules[i++];)
        {   
            (function(rule){
                var ary = rule.strategy.split(':');
                var errorMsg = rule.errorMsg;
                self.cache.push(function(){
                    var strategy = ary.shift()
                    ary.unshift(dom.value);
                    ary.push(errorMsg);

                    return strategies[strategy].apply(dom,ary);

                });
            })(rule)
        }
    }

    Validator.prototype.start = function(){
        for(var i = 0,validatorFunc;validatorFunc=this.cache[i++];){
            var msg = validatorFunc();
            if(msg)
            {
                return msg;
            }
        }
    }

     //使用方法
     //处理校验
    //  var validatorFunc = function () {
    //     var validator = new Validator(); //创建验证逻辑
    //     //添加验证条件
    //     validator.add(registerForm.userName, [
    //         {
    //             strategy: 'isEmpty',
    //             errorMsg: '用户不能为空'
    //         }, {
    //             strategy: 'minLength:2',
    //             errorMsg: '用户不能少于2位'
    //         }]);
    //     validator.add(registerForm.password, [
    //         {
    //             strategy: 'minLength:6',
    //             errorMsg: '密码长度不能少于6位'
    //         }]);
    //     validator.add(registerForm.phoneNumber, [
    //         {
    //             strategy: 'isMobile',
    //             errorMsg: '手机号码格式不正确'
    //         }]);
    //     var errorMsg = validator.start();
    //     return errorMsg;
    // };
    // var registerForm = document.getElementById("registerForm");
    // registerForm.onsubmit = function () {
    //     var errorMsg = validatorFunc();
    //     if (errorMsg) { //判断是否有这个参数
    //         alert(errorMsg);
    //         return false;
    //     }
    // };


    function _formSubmit(formId,url,elem){
         var _elem =  $('#'+formId);
        //配置表单验证插件
         _elem.validationEngine('attach',{
            autoPositionUpdate:false,
            promptPosition:'bottomRight',
            autoHidePrompt:true,
            autoHideDelay:1500,
            addPromptClass:'formError-small formError-white',
        });

        var isPassed =_elem.validationEngine('validate')

        if(isPassed)
        {
            //表单数组序列化
            var formVal = _elem.serializeArray();
            var obj = {};
            for(var i=0;i<formVal.length;i++){
                obj[formVal[i].name] = formVal[i].value;
            }
            console.log(obj);
            //禁用按钮
            elem.attr('disabled', true);

            //http 请求
            http.request({
                url:url,
                data:JSON.parse(JSON.stringify(obj)),
                dataType:'jsonp'
            })
            .done(function(res){
                elem.attr('disabled',false)
            })
            .fail(function(error){
                elem.attr('disabled',false)
            });
        }
        return isPassed
    }   
    return{
        Validator:Validator,
        formSubmit:_formSubmit
    }
})(http);