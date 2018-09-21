/**
 * code格式化
 */
var CodeUtils = {
    "formatCode":function (codeName,codeKey) {
        var codeData = queryCodeData(codeName);
        for (var index in codeData)  {
            if(codeKey == codeData[index].codeKey) {
                return codeData[index].codeValue;
            }
        }
        return "";
    }
};

/**
 * 初始化radio
 * @type {{initRadio: RadioUtils.initRadio, initRadioHtml: (function(*, *): string)}}
 */
var RadioUtils = {
    "init":function (obj) {
        var paramJson = {
            domId:obj.domId,
            codeName:obj.codeName,
            codeKey:obj.codeKey||"",
            style:obj.style||"line",    //line放在一行 block放在一列
            domName:obj.domName||"defaultName"
        };
        var codeData = queryCodeData(paramJson.codeName);
        var html =  this.initRadioHtml(codeData,paramJson);
        $("#"+obj.domId).html(html);
    },
    "initRadioHtml":function (codeData,paramJson) {
        var html = "";
        var codeKey = paramJson.codeKey;
        var styleClass = "radio radio-primary radio-inline";
        if(paramJson.style == "block") {
            styleClass = "radio radio-primary";
        }
        if(codeKey != null && codeKey  != '' && codeKey  != "undefined ") {
            for (var index in codeData) {
                html += "<div class=\"" + styleClass + "\">";
                if(codeKey == codeData[index].codeKey) {
                    html += "<input type=\"radio\" id=\"" + paramJson.domId + index + "\" value=\"" + codeData[index].codeKey + "\" name=\"" + paramJson.domName + "\" checked>"
                } else {
                    html += "<input type=\"radio\" id=\"" + paramJson.domId + index + "\" value=\"" + codeData[index].codeKey + "\" name=\"" + paramJson.domName + "\">"
                }
                html += "<label for=\"" + paramJson.domId + index + "\">" + codeData[index].codeValue + "</label>";
                html += "</div>";
            }
        } else {
            for (var index in codeData) {
                html += "<div class=\"" + styleClass + "\">";
                if(index == 0) {
                    html += "<input type=\"radio\" id=\"" + paramJson.domId + index + "\" value=\"" + codeData[index].codeKey + "\" name=\"" + paramJson.domName + "\" checked>"
                } else {
                    html += "<input type=\"radio\" id=\"" + paramJson.domId  + index + "\" value=\"" + codeData[index].codeKey + "\" name=\"" + paramJson.domName + "\">"
                }
                html += "<label for=\"" + paramJson.domId + index + "\">" + codeData[index].codeValue + "</label>";
                html += "</div>";
            }
        }
        return html;
    }
};

/**
 * 初始化check
 * @type {{initRadio: checkBoxUtils.initRadio, initRadioHtml: (function(*, *): string)}}
 */
var checkBoxUtils = {
    "init":function (obj) {
        var paramJson = {
            domId:obj.domId,
            codeName:obj.codeName,
            codeKeyStrs:obj.codeKeyStrs||"",
            style:obj.style||"line",    //line放在一行 block放在一列
            domName:obj.domName||""
        };
        var codeData = queryCodeData(paramJson.codeName);
        var html =  this.initCheckBoxHtml(codeData,paramJson);
        $("#"+paramJson.domId).html(html);
    },
    "initCheckBoxHtml":function (codeData,paramJson) {
        var html = "";
        var codeKeyStrs = paramJson.codeKeyStrs;
        var codeKeyArray = null;
        if(codeKeyStrs != null && codeKeyStrs  != '' && codeKeyStrs  != "undefined") {
            codeKeyStrs = codeKeyStrs.charAt(codeKeyStrs.length - 1) == "," ? codeKeyStrs.substring(0,codeKeyStrs.length - 1) : codeKeyStrs;
            codeKeyArray = codeKeyStrs.split(",");
        }

        var styleClass = "checkbox checkbox-inline checkbox-primary";
        if(paramJson.style == "block") {
            styleClass = "checkbox checkbox-primary";
        }
        if(codeKeyArray != null && codeKeyArray.length > 0) {
            for (var index in codeData) {
                html += "<div class=\"" + styleClass + "\">";
                var checkFlag = false;
                for(var i = 0; i < codeKeyArray.length; i++) {
                    if(codeKeyArray[i] == codeData[index].codeKey) {
                        checkFlag = true;
                        break;
                    }
                }
                if(checkFlag) {
                    html += "<input id=\"" + paramJson.domId + index + "\" class=\"styled\" type=\"checkbox\" name=\"" + paramJson.domName + "\" value=\"" + codeData[index].codeKey + "\" checked>";
                } else {
                    html += "<input id=\"" + paramJson.domId + index + "\" class=\"styled\" type=\"checkbox\" name=\"" + paramJson.domName + "\" value=\"" + codeData[index].codeKey + "\">";
                }
                html += "<label for=\"" + paramJson.domId + index + "\">" + codeData[index].codeValue + "</label>";
                html += "</div>"
            }
        } else {
            for (var index in codeData) {
                html += "<div class=\"" + styleClass + "\">";
                html += "<input id=\"" + paramJson.domId + index + "\" class=\"styled\" type=\"checkbox\" name=\"" + paramJson.domName + "\" value=\"" + codeData[index].codeKey + "\">";
                html += "<label for=\"" + paramJson.domId + index + "\">" + codeData[index].codeValue + "</label>";
                html += "</div>"
            }
        }
        return html;
    }
};

/**
 * 根据code名称查询code
 * @param codeName
 */
function queryCodeData(codeName) {
    var codeData = sessionStorage.getItem(codeName);
    if(codeData != null && codeData  != '' && codeData  != "undefined ") {
        return JSON.parse(codeData);
    } else {
        $.ajax({
            type:'GET',
            async:false,
            url: "/login/privateAuthority/cacheAction/findCacheCodeByCodeName",
            data:{codeName:codeName},
            dataType:"json",
            success: function (resultData) {
                if(resultData.code == 200) {
                    codeData = resultData.data;
                    sessionStorage.setItem(codeName,JSON.stringify(codeData));	//加入浏览器缓存
                } else {
                    console.log("code格式化失败,Code:" + resultData.code + ",message:" + resultData.message);
                }
            }
        });
    }
    return codeData;
}

/**
 * 下拉框插件公共方法
 * https://select2.org/programmatic-control/add-select-clear-items
 */

var SelectUtils = (function(){

    //参数配置
    function getParams(para){
        var _para = para||{};
        return {
            placeholder:'请选择',
            width:'220',
            language:'zh-CN',
            allowClear:true,
            multiple:_para.multiple||false,
            theme:'bootstrap',
            debug:true,
            allowClear:true
        }
    }
    //数据格式转换
    function _convertData(data,key,value,selectedKey,type){
        var newData = [];
        var flag = false;
        var selectedArr = [];
        if(selectedKey != '' && selectedKey != null && selectedKey!=undefined) {
            selectedArr = selectedKey.split(',');
            flag = true;
        }
        if(data != null && data.length>0)
        {
            if ("1" == type) {
                newData.push({id:" ",text:"请选择"});
            } else {
                newData.push({id:" ",text:"全部"});
            }
            for(var i=0;i<data.length;i++)
            {
                var obj = {};
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
        }
        return newData
    }

    //初始化下拉框
    function _init(obj){

        var _obj = {
            url:obj.url||'/login/privateAuthority/cacheAction/findCacheCodeByCodeName',
            codeName:obj.codeName,
            ele:obj.domId,
            para:obj.para,
            id:obj.codeKey,
            text:obj.codeValue,
            data:obj.data,
            type:obj.type||"1",
            selectedKey:obj.selectedKey
         };
        if($('#'+_obj.ele).find('option').length>2)
        {
            _reload(_obj);
            return;
        }

        // if(_obj.url)
        //     $.getJSON(_obj.url+'?codeName='+_obj.codeName,function(res){
        //         var _data = res.data;
        var _data =  queryCodeData(_obj.codeName);
        var newData = _convertData(_data,_obj.id,_obj.text,_obj.selectedKey,_obj.type);
        var config = getParams(_obj.para);
        config.data = newData;
        $('#'+_obj.ele).select2(config);
        //     })
        // else
        // {
        //     var newData = _convertData(_obj.data,_obj.id,_obj.text);
        //     var config = getParams(_obj.para);
        //     config.data = newData;
        //     $('#'+_obj.ele).select2(config);
        // }
    }


    //刷新下拉列表
    function _reload(obj){
        var _obj = {
            url:obj.url||'/login/privateAuthority/cacheAction/findCacheCodeByCodeName',
            codeName:obj.codeName,
            ele:obj.ele,
            para:obj.para,
            id:obj.id,
            text:obj.text,
            data:obj.data,
            type:obj.type||"1",
            selectedKey:obj.selectedKey
        };
        var _ele =  $('#'+_obj.ele);
        var _data =  queryCodeData(_obj.codeName);
        var newData = _convertData(_data,_obj.id,_obj.text,_obj.selectedKey,_obj.type);
        _clear(newData,_ele);
        /*if(_obj.data)
        {
            $.getJSON(url,function(res){
                var _data = _convertData(res.data)
                _clear(_data,_ele,_obj.selectedKey);
            })
        }
        else
        {
            var _data = _convertData(_obj.data,_obj.selectedKey);
            _clear(_data,_ele);
        }*/
    }
    //重新生成列表项
    function _clear(data,ele){
        ele.empty();
        // var flag = false;
        // var selectedArr = [];
        // $.each(data,function(i,item){
        //     if(item.selected)
        //     {
        //         ele.append("<option value='"+item.id+"' selected>"+item.text+"</option>");
        //     }
        //     else
        //     {
        //         ele.append("<option value='"+item.id+"'>"+item.text+"</option>");
        //     }
        //     console.log(item)
        // });
        var config = getParams();
        config.data = data;
        ele.select2(config);
    }

    return {
        init:_init,
         reload:_reload
    }
})();
