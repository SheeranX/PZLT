$(function(){
	 //文件上传控件
//  var file = FileInput.oFile;
//  file.Init('input-id',"");

    //日期选择控件
    //datePicker.init('datetimepicker','yyyy-mm-dd')
       $(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd - hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left"
    });
})
