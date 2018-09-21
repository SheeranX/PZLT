//defer模块包装request
var defer = (function(toast){
    var d = $.Deferred();
    function _createDefer(fn){
        //标记loading弹窗,用于关闭
        var index ="";
        return function(obj){

            obj.success = function(res)
            {
                if(res.code=='200')
                {
                    toast.success(res.message);
                    d.resolve(res)
                }
                else
                {
                    toast.error(res.message)
                    d.reject(res.message)
                }
            }

            obj.error = function(error)
            {
                toast.error("网络请求错误"+error.status);
                d.reject(error)
            }
            
            obj.beforeSend = function(){
                index = toast.loading();
            }
            
            obj.complete = function(){
                toast.closeLoad(index);
            }

            
            fn(obj);
            return d.promise()
        }
    }

    return {
        newDefer:_createDefer
    }
})(toast);

//http请求
var http = (function(defer){
    /**
     * url:请求地址
     * data:请求数据,
     * method:请求方式,
     * dataType:处理跨域的方式,
     * async:异步还是同步
     */
    function _request(obj){
        var params =  {
            url:obj.url,
            data:obj.data||null,
            method:obj.method||'get',
            //dataType:obj.dataType||'',
            async:obj.async||true
        }
        var request = defer.newDefer($.ajax);

        return request(params)
    }

    return {
        request:_request
    }
})(defer);  