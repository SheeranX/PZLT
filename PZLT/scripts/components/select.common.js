/**
 * 下拉框插件公共方法
 * https://select2.org/programmatic-control/add-select-clear-items
*/

var select = (function(){

    //参数配置
    function getParams(para){
        var _para = para||{};
        return {
            placeholder:'请选择',
            width:'220',
            language:'zh-CN',
            allowClear:false,
            multiple:_para.multiple||false,
            theme:'bootstrap',
            debug:true,
        }
    }
    //数据格式转换
    function _convertData(data,key,value,selectedKey,selectType){
        var newData = [];
        var flag = false;
        var selectedArr = [];
        if(selectedKey != '' && selectedKey != null && selectedKey!=undefined) {
            selectedArr = selectedKey.split(',');
            flag = true;
        }
        if(data.length>0)
        {
            for(var i=0;i<data.length;i++)
            {
                var obj = new Object();
                obj['id'] = data[i][key];
                obj['text'] = data[i][value];
                if(flag) {
                    for (var j = 0; j < selectedArr.length; j++) {
                        if (data[i][key] == selectedArr[j]) {
                            obj['selected'] = true;
                            break;
                        }
                    }
                }
                newData.push(obj);
            }
            if(selectType)
            {
                var typeSlt = {};
                typeSlt['id'] = selectType=='0'?' ':' ';
                typeSlt['text'] = selectType=='0'?"全部":"请选择";
                typeSlt['selected'] = false;
                newData.unshift(typeSlt);
            }
        }

        return newData
    }

    //初始化下拉框
   function _init(obj){
        var _obj = {
            url:obj.url,//url
            ele:obj.ele,
            para:obj.para,
            data:obj.data,
            id: obj.id,
            text: obj.text,
            selectedKey:obj.selectedKey,
            selectType:obj.selectType// '0':全部 '1':请选择
        }
        if($('#'+_obj.ele).find('option').length>0)
            _reload(_obj);
        else
        {
            if(_obj.url)
                $.getJSON(_obj.url,function(res){
                    var _data = res.data;
                    var newData = _convertData(_data,_obj.id,_obj.text,_obj.selectedKey,_obj.selectType);
                    var config = getParams(_obj.para);
                    config.data = newData;
                    $('#'+_obj.ele).select2(config);
                })
            else
            {
                var newData = _convertData(_obj.data,_obj.id,_obj.text,_obj.selectedKey,_obj.selectType);
                var config = getParams(_obj.para);
                config.data = newData;
                $('#'+_obj.ele).select2(config);
            }
        }
    }

    //刷新下拉列表
    function _reload(obj){
        var _obj = {
            url:obj.url,
            ele:obj.ele,
            data:obj.data,
            id: obj.id,
            text: obj.text,
            selectedKey:obj.selectedKey,
            selectType:obj.selectType||undefined
        }
        var _ele =  $('#'+_obj.ele);
        if(_obj.url)
        {
            $.getJSON(_obj.url,function(res){
                var _data = _convertData(res.data,_obj.id,_obj.text,_obj.selectedKey,_obj.selectType);
               _clear(_data,_ele,_obj.selectedKey);
            })
        }
        else
        {
            var _data = _convertData(_obj.data,_obj.id,_obj.text,_obj.selectedKey,_obj.selectType);
            _clear(_data,_ele,_obj.selectedKey);
        }
    }
    //重新生成列表项
    function _clear(data,ele){
            ele.empty();
           // ele.select2("data", null)
            var config = getParams();

            config.data = data;
            ele.select2(config);
    }
    return {
        init:_init,
        reload:_reload
    }
})();
