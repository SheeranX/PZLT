//初始化fileinput  http://plugins.krajee.com/file-basic-usage-demo#basic-example-1

/**
 * 配置详情查看 fileupload.js--> $.fn.fileupload.defaults
 */
var FileInput = (function () {
    var oFile = {};
    var urlArr = [];
    //初始化fileinput控件

    var control = '';
     oFile.Init = function(ctrlName,domid) {
         var uploadUrl = '/upload'
         control = $('#' + ctrlName);
         //导入文件上传完成之后的事件
         control.on("fileuploaded", function (event, data, previewId, index) {
             console.log(JSON.stringify(data));
             console.log(previewId+'~~'+index)
             if(data.response['code']=='200')
             {
                 var urlArr = handleUrl(domid,data.response.message,index);
                $("#"+domid).val(urlArr);
             }
         });
         //监听文件移除
         control.on('fileremoved',function(event,id,index){
             console.log('id = ' + id + ', index = ' + index);

         });
         //监听上传失败
         control.on('fileuploaderror',function(event,data,msg){
            console.log(data);
            console.log(msg);
         })
         //监听删除
         control.on('filedeleted',function(event,key,jqhr,data){
             console.log(key+','+data+','+jqhr);
         })
         
    //初始化上传控件的样式
    control.fileinput({
        showPreview:true,
        language: 'zh', //设置语言
        uploadUrl: uploadUrl, //上传的地址
        allowedFileExtensions: ['jpg', 'gif', 'png','doc','docx','xlsx','txt','xls','pdf'],//['jpg', 'gif', 'png'],//接收的文件后缀
        showUpload: true, //是否显示上传按钮
        showCaption: false,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式     
        //dropZoneEnabled: false,//是否显示拖拽区域
        //minImageWidth: 50, //图片的最小宽度
        //minImageHeight: 50,//图片的最小高度
        //maxImageWidth: 200,//图片的最大宽度
        //maxImageHeight: 200,//图片的最大高度
        //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
        //minFileCount: 0,
        maxFileCount: 5, //表示允许同时上传的最大文件个数
        //enctype: 'multipart/form-data',
        validateInitialCount:true,
        previewFileIcon: "<i class='glyphicon glyphicon-file'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        resizeImage:false,//是否允许图片自适应,（取消自适应，否则报错）
        required:true,//是否允许不选文件上传,
        allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash','object'],//取消office，gdoc预览
        previewSettings:{
            image: {width: "auto", height: "auto", 'max-width': "100%", 'max-height': "100%"},
            html: {width: "213px", height: "160px"},
            text: {width: "213px", height: "160px"},
            // office: {width: "213px", height: "160px"},
            //gdocs: {width: "213px", height: "160px"},
            video: {width: "213px", height: "160px"},
            audio: {width: "100%", height: "30px"},
            flash: {width: "213px", height: "160px"},
            object: {width: "213px", height: "160px"},
            pdf: {width: "213px", height: "160px"},
            other: {width: "213px", height: "160px"}
        },
        previewFileIconSettings: {
            'doc': '<i class="fa fa-file-word-o text-primary"></i>',
            'xls': '<i class="fa fa-file-excel-o text-success"></i>',
            'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
            'jpg': '<i class="fa fa-file-photo-o text-warning"></i>',
            'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
            'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
            'docx':'<i class="fa fa-file-word-o text-primary"></i>',
            'xlsx':'<i class="fa fa-file-excel-o text-success"></i>'
        },
        previewZoomSettings:{
            image: {width: "auto", height: "auto", 'max-width': "100%",'max-height': "100%"},
            html: {width: "100%", height: "100%", 'min-height': "480px"},
            text: {width: "100%", height: "100%", 'min-height': "480px"},
            office: {'width': "200px", 'height': "250px"},
            //gdocs: {width: "100%", height: "100%", 'max-width': "100%", 'min-height': "480px"},
            video: {width: "auto", height: "100%", 'max-width': "100%"},
            audio: {width: "100%", height: "30px"},
            flash: {width: "auto", height: "480px"},
            object: {width: "auto", height: "200px"},
            pdf: {width: "100%", height: "100%", 'min-height': "480px"},
            other: {width: "auto", height: "100%", 'min-height': "480px"}
        },
         layoutTemplates:{
             progress: '<div class="progress">\n' +
                 '    <div class="progress-bar progress-bar-success progress-bar-striped text-center" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;line-height: 10px">\n' +
                 '        {status}\n' +
                 '     </div>\n' +
                 '</div>',
         }

     });
};
     //处理返回的url
   function handleUrl(domid,url,idx){
    var $elem = $('#'+domid);
    var str  = $elem.val();
    var arr = [];
    if (str==''||str==undefined||str==null)
    {
        return url
    }
    else
    {
        arr  = str.split(',');
        if(arr.length>0)
        {
            $.each(arr,function(i,item){
                if(item!=url)
                {
                    arr.push(url)
                }
            })
        }
    }
    return arr.join(',');
   }
    return {
        oFile:oFile
    };
})();