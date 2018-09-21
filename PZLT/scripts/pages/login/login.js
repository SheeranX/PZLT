
    var validatorFunc = function () {
        var validator = new form.Validator(); //创建验证逻辑
        //添加验证条件
        validator.add(login.username, [{
            strategy: 'isEmpty',
            errorMsg: '用户名不能为空'
        }, {
            strategy: 'minLength:2',
            errorMsg: '用户名不能少于2位'
        }]);
        validator.add(login.password, [{
            strategy: 'minLength:6',
            errorMsg: '密码长度不能少于6位'
        }]);
        validator.add(login.validate, [{
            strategy: 'isEmpty',
            errorMsg: '验证码不能为空'
        }]);
        var errorMsg = validator.start();
        return errorMsg;
    };

    var login = $("#login")[0];

    login.onsubmit = function () {
        var errorMsg = validatorFunc();

        if (errorMsg) 
        { //判断是否有这个参数
            toast.warning(errorMsg);
            return false;
        } 
        else
        {
            window.location.href = 'index.html';
            console.log('++++');
            event.preventDefault();
        }
    }