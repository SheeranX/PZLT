var comboSelect = (function(select){

    function _createSelect(domID){
        var elem = $('#'+domID);
        var arr = elem.find('select');
        //设置蒙层防止重复点击
        var style = [
            'color: #337ab7',
            'position: absolute',
            'z-index: 999',
            'margin-top: -3px',
            'width: 220px',
            'height: 40px',
            'vertical-align: 40px',
            'text-align: right',
            'padding-right: 50px',
            'padding-top: 12px'
        ].join(';')
        //加载效果
        var loading = "<span style='"+style+"'><i class='fa fa-circle-o-notch fa-spin'></i></span>";
        var ids = [];
        //遍历下拉框
        $.each(arr,function(i,item){
                select.init({
                    id:'id',//默认值
                    text:'text',//默认值
                    ele: $(item).attr('id'),
                    data:[],
                    // selectType:'1'
                });
               // $(item).trigger('select2-opening');
          ids.push($(item).attr('id'));
          //监听下拉框打开

          $(item).on('select2:opening',function(e){
              if(i==0&&$(item).find('option').length<2)

              {
                  $(item).before(loading);
                  $.getJSON($(item).data('url'),function (res) {
                      select.reload({
                          data:res.data,
                          ele:$(item).attr('id'),
                          id:$(item).data('key'),
                          text:$(item).data('value'),
                         // selectType:'1'
                      });
                      $(item).select2('open');
                      $(item).trigger('change');//触发默认选中
                      $(item).prev().remove();
                  })
              }
          })
            //监听选中值，刷新下一级下拉列表
          $(item).on('change',function(){
              var val = $(item).val();
              console.log(val);
              //console.log(para);
              if(i>=(arr.length-1))
                return
               $(arr[i+1]).before(loading);
               $.getJSON($(arr[i+1]).data('url')+val,function(res){
                   select.reload({
                       data:res.data,
                       ele:$(arr[i+1]).attr('id'),
                       id:$(arr[i+1]).data('key'),
                       text:$(arr[i+1]).data('value'),
                       //selectType:'1'
                   });
                   //移除加载中蒙层
                   $(arr[i+1]).prev().remove();
                   $(arr[i+1]).trigger('change');
               })

          })
        });
          elem.find('option').first().select2('open');
      }
      return {
        createSelect:_createSelect
      }
})(select);