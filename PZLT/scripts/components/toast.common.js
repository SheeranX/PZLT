//通知提示插件 
var toast = (function(layer){

    //错误提示
    function error(msg){
        layer.msg(msg, {icon: 2}); 
    }

    //成功提示
    function success(msg){
        layer.msg(msg, {icon: 1}); 
    }

    //警告提示
    function warning(msg){
        layer.msg(msg, {icon: 7,anim:6,time:1000}); 
    }

    //加载提示
     function loading(){
       return parent.layer.load(1,{shade:0.3,scrollbar:false});
    }

    //关闭加载提示
    function closeLoad(index){
        parent.layer.close(index);
    }

    return {
        error:error,
        success:success,
        warning:warning,
        loading:loading,
        closeLoad:closeLoad
    }

})(layer);