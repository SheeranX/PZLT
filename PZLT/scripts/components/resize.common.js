var resize  = (function(){

    
    function _resize(){
        _getCurrentPageSize();
    }

    function _getCurrentPageSize(){
       var height = $(document).height();
       $('#mainframe',parent.document).height(height);
       $('body').css({'overflow-y':'hidden','min-width':'1000px'});
       console.log(height);
    }

    return {
        resizePage:_resize
    }
})();