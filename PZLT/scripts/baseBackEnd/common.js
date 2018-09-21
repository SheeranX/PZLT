var tocken = ""; // 请求认真
var contextPath = getContextPath();
//DES加密
function encryptByDESLogin(message) {
    var key = "^75$gh@`0dfx";
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
/**
 * 获取contextPath
 * @returns
 */
function getContextPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return "";
}

//返回上一级
function back() {
    var backUrl =  window.parent.$('#backUrl').attr("href");
    window.parent.$("#mainframe").attr("src",backUrl);
    window.parent.scroll(0,0);
}

var loadObj = null;
/**
 * 锁定界面(带默认文本)
 */
function lockPage2() {
    loadObj = layer.load("正在提交…"); //需关闭加载层时，执行layer.close(loadi)即可
}
/**
 * 锁定界面(带默认文本)
 */
function lockPage4() {
    loadObj = layer.load("正在加载中…"); //需关闭加载层时，执行layer.close(loadi)即可
}
/**
 * 锁定界面
 */
function lockPage() {
    loadObj = layer.load(); //需关闭加载层时，执行layer.close(loadi)即可
}
/**
 * 锁定界面
 * @param str 显示文本
 */
function lockPage3(str) {
    loadObj = layer.load(str); //需关闭加载层时，执行layer.close(loadi)即可
}
/**
 * 关闭锁定界面
 */
function unLockPage() {
    layer.close(loadObj);
}
/**
 * 关闭锁定界面
 */
function unLockPage2() {
    layer.close(loadObj);
}
/**
 * 弹出提示消息
 * @param str
 */
function showMessage(str) {
    layer.msg(str,{icon: 12});
}
/**
 * 弹出提示消息并自动关闭
 * @param mes 消息内容
 * @param index 关闭窗口索引
 * @param type 1：消息 2：错误
 */
function showMessage(mes,index,type) {
    layer.msg(mes, {
        icon: type,
        time: 2300 //2秒关闭（如果不配置，默认是3秒）
    }, function(){
        layer.close(index);
    });
}

/**
 * 删除数据
 * @param ids 删除数据id字符串
 * @param formId form表单id
 * @param grid grid列表名字
 * @param url 删除地址
 */
function deleteObj(ids,formId,grid,url){
    var url = contextPath+url;
        parent.layer.confirm('您确定要删除该条纪录吗?', {
        icon: 0,
        title:'提示',
        skin: 'layer-ext-myskin'
    }, function(index){
        // $('.layui-layer-btn0').unbind('click');
        $.post(url,{ids:ids},function(result){
            var obj = result;
            var mes = obj.message;
            if(200 == obj.code) {
                reloadGrid(formId,grid);
                parent.layer.closeAll();
                showMessage(mes,index,1);
            } else {
                parent.layer.closeAll();
                showMessage(mes,index,2);
            }
        })
    });
}

/**
 * 操作数据
 * @param ids 操作数据id字符串
 * @param formId form表单id
 * @param grid grid列表名字
 * @param url 请求地址
 * @param msg 提示消息
 */
function operateObj(ids,formId,grid,url,msg){
    var url = contextPath+url;
    parent.layer.confirm(msg, {
        icon: 0,
        title:'提示',
        skin: 'layer-ext-myskin'
    }, function(index){
        // $('.layui-layer-btn0').unbind('click');
        $.post(url,{ids:ids},function(result){
            var obj = result;
            var mes = obj.message;
            if(200 == obj.code) {
                reloadGrid(formId,grid);
                parent.layer.closeAll();
                showMessage(mes,index,1);
            } else {
                parent.layer.closeAll();
                showMessage(mes,index,2);
            }
        })
    });
}

/**
 * 用于查询
 * @param id  查询表单id
 * @param grid 数据表格名字
 */
function search(id, grid) {
    //$("#Pagination").pagination(0);
    //$('#page').val(1);
    var query = $('#' + id).serializeArray();
    var page = grid.get('page');
    grid.set({
        parms : query
    });
    if (page == 1) {
        grid.loadData();
    } else {
        grid.changePage('first');
    }
}
//查询
function resetSearch() {
    search('queryForm',g);
}

/**
 * 刷新grid列表数据
 * @param formId form表单id
 * @param grid grid列表名字
 */
function reloadGrid(formId,grid){
    var query = $('#'+formId).serializeArray();
    grid.set({parms : query});
    grid.loadData();
}

var form = (function(http){
    function _formSubmit(formId, elem){
        var _elem =  $('#'+formId);
        //配置表单验证插件
        _elem.validationEngine('attach',{
            autoPositionUpdate:false,
            promptPosition:'bottomRight',
            autoHidePrompt:true,
            autoHideDelay:1500,
            addPromptClass:'formError-small formError-white',
        });

        var isPassed =_elem.validationEngine('validate');

        if(isPassed)
        {

            var actionUrl = _elem.attr('action');
            //表单数组序列化
            var formVal = _elem.serializeArray();
            console.log(formVal)
            var obj = {};
            // for(var i=0;i<formVal.length;i++){
            //     obj[formVal[i].name] = formVal[i].value;
            // }
            $.each(formVal,function(i,item){
                if((i-1)>=0&&item.name==formVal[i-1].name)
                {
                    obj[item.name] +=","+item.value;
                }
                else  obj[item.name] = item.value;
            })

            console.log(obj);

            //禁用按钮
            elem.attr('disabled', true);

            //http 请求
            http.request({
                url:actionUrl,
                data:JSON.parse(JSON.stringify(obj)),
            })
                .done(function(res){
                    elem.attr('disabled',false);
                    back();
                })
                .fail(function(error){
                    elem.attr('disabled',false);
                });
        }
        return isPassed
    }
    return{
        formSubmit:_formSubmit
    }
})(http);

var boxUtil= (function(){
    /*
    * @param boxType:string (radio/checkbox);
    * @param styleType:string (inline/"");
    * @param domid:string dom attribute:id; 必填
    * @param key:string; 必填
    * @param text:string; 必填
    * */
    function createBox(obj,params){
        var _obj = {
            boxType:obj.boxType||"checkbox",
            styleType:obj.styleType||"inline",
            domid:obj.domId,
            key:obj.key,
            text:obj.text,
            name:obj.name,
            checkKey:obj.checkKey
        }
        var _params = params||""
        initBox(_obj,_params);
    }

    function createHtml(para,data){

        var _params = {
            boxType:para.boxType,
            styleType:para.styleType,
            domid:para.domid,
            key:para.key,
            text:para.text,
            name:para.name,
            checkKey:para.checkKey||""
        }

        var _boxType = _params.boxType? _params.boxType:"checkbox";

        var boxClass = _boxType+" "+( _boxType+(_params.styleType=='inline'?"-inline ":""))+" "+(_boxType+"-primary");
        var html = "";
        var keyArr = []

        if($.trim(_params.checkKey)!=""&&_params.checkKey!=null&&_params.checkKey!=undefined)
        {
            keyArr = _params.checkKey.split(',');
        }
        //生成需要用到的html字符串
        $.each(data,function(i,item){
            html+=[
                '<div class="'+boxClass+'">',
                '<input type="'+_boxType+'" class="styled" id="'+item[_params.key]+"["+i+"]"+'" value="'+item[_params.key]+'" name="'+_params.name+'"',
               (keyArr.indexOf(item[_params.key].toString())!=-1?"checked":""),'>',
                '<label for="'+item[_params.key]+"["+i+"]"+'">'+item[_params.text]+'</label>',
                '</div>'
            ].join('');
        })

        $('#'+_params.domid).html(html);
    }

   function initBox(para,urlParas){
        var url = $('#'+para.domid).data('url');
        $.getJSON(url,urlParas,function (res) {
            if('200'==res.code)
            {
                createHtml(para,res.data);
            }
            console.error('error! 网络请求错误');
        })
   }
    return {
        createBox:createBox
    }
})();
