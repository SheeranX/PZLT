//生成table的公共方法

var table = (function(){

    function _initTable(url,id,column){

       //获取数据的键数组
      // var keyGroup = Object.keys(data.Rows[0]);
       var obj = {columns:[]};
       var g = null;
       var $elem = $('#'+id);
        //表格默认参数配置
       var para ={
            url:url,
            pageSize:20,
            sortName:null,
            width:'auto',
            height:'700px',
            checkbox:true,
            rownumbers:true,
            fixedCellHeight:true,
            minColumnWidth:60,
            pageSizeOptions: [10, 15, 20, 25, 30],
            isScroll:false,
            checkbox:false,
            rowHeight:40,
            headerRowHeight:45
       };

       var obj = {
        columns:column
       };

        g =  $elem.ligerGrid(Object.assign(obj,para));
      //  console.log($elem.find('.l-panel-bwarp').find());
        //$elem.find('.l-grid-row-cell-inner')
        $elem.on('mouseover','.l-grid-row-cell-inner',function(){

           var currentIdx = $(this).parent().index();
           var len = $(this).parent().siblings().length;
            if(currentIdx==len) return
            var text = $(this).text();
            $(this).attr('title',text);
         //  console.log();

        })

        return g;
    }


    return{
        initTable:_initTable
    }
})();

//$('body').css({'min-width':'1200px'});
