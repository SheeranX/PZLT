/**
 * 验证邮件是否合法
 * @param emailStr 需要验证的邮件
 * @returns {Boolean} true为合法 false为不合法
 */
function checkEmail(emailStr) {
	var objReg = new RegExp("[A-Za-z0-9-_]+@[A-Za-z0-9-_]+[\.][A-Za-z0-9-_]");
    var IsRightFmt = objReg.test(emailStr);
    var objRegErrChar = new RegExp("[^a-z0-9-._@]","ig"); 
    var IsRightChar = (emailStr.search(objRegErrChar)==-1);
    var IsRightLength = emailStr.length <= 60;
    var IsRightPos = (emailStr.indexOf("@",0) != 0 && emailStr.indexOf(".",0) != 0 && emailStr.lastIndexOf("@")+1 != emailStr.length && emailStr.lastIndexOf(".")+1 != emailStr.length); 
    var IsNoDupChar = (emailStr.indexOf("@",0) == emailStr.lastIndexOf("@"));
    if(IsRightFmt && IsRightChar && IsRightLength && IsRightPos && IsNoDupChar)  {
    	return true;
    } else {
       return false;
    }
}

/**
 * 验证身份证号码是否合法
 * @param idNo 身份证号码
 * @returns {Boolean} true为合法 false为不合法
 */
function checkIdNo(idNo) {
    var regex = '';
	if (idNo.length == 0) {
		return false;
	}
	//var errors = new Array("","身份证号码位数不对!","身份证号码出生日期超出范围或含有非法字符!","身份证号码校验错误!","身份证地区非法!");
    var area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
	var Y,JYM;
	var S,M;
	if (!/^\d{17}(\d|x)$/i.test(idNo)) {
		return false;
	}
	var idcard_array = new Array();
	idcard_array = idNo.split("");
	if (area[parseInt(idNo.substr(0,2))] == null) {
		return false;
	}
	switch(idNo.length) {
		case 15:
			if ((parseInt(idNo.substr(6,2))+1900) % 4 == 0 || ((parseInt(idNo.substr(6,2))+1900) % 100 == 0 && (parseInt(idNo.substr(6,2))+1900) % 4 == 0 )) {
				regex = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
			} else {
				regex = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
			}
			if (regex.test(idNo)) { 
				return true;
			}  else { 
				return false;
			}
			break;
		case 18:
			if ( parseInt(idNo.substr(6,4)) % 4 == 0 || (parseInt(idNo.substr(6,4)) % 100 == 0 && parseInt(idNo.substr(6,4))%4 == 0 )) {
				regex = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
			} else {
				regex = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
			}
			if(regex.test(idNo)) {
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3 ;
				Y = S % 11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y,1);
				if(M == idcard_array[17]) {
				    return true ;
				} else {
				    return false;
				}
			} else {
				return false;
			}
			break;
		default:
			return false;
			break;
    }
}

/**
 * 验证电话是否合法
 * @param telePhonestr 电话号码
 * @returns true为合法 false为不合法
 */
function checkTelePhone(telePhonestr) {
	//电话号码
	var pattern = /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/;
	return pattern.test(telePhonestr);
}
/**
 * 验证手机号码是否合法
 * @param mobilephoneStr 手机号码
 * @returns true为合法 false为不合法
 */
function checkMobilephone(mobilephoneStr) {
	//手机号码
	var pattern = /^1[3,4,5,7,8]\d{9}$/;
	return pattern.test(mobilephoneStr);
}
/**
 * 验证QQ是否合法
 * @param qqStr QQ号码
 * @returns true为合法 false为不合法
 */
function checkQQ(qqStr) {
	//腾讯QQ
	var pattern = /^[1-9][0-9]{4,}$/;
	return pattern.test(qqStr);
}

/**
 * 验证密钥是否合法
 * @param key 密钥
 * @returns true为合法 false为不合法
 */
function checkKey(key) {
	var pattern = /^[0-9]{1,3}$/;
	return pattern.test(key);
}

/**
 * 验证用户名是否合法
 * @param userName 用户名
 * @returns true为合法 false为不合法
 */
function checkUserName(userName) {
	//用户名
	var pattern =  /^[a-zA-Z0-9_]{1,20}$/;
	return pattern.test(userName);
}
/**
 * 验证个人网站是否合法
 * @param str_url URL
 * @returns {Boolean} true为合法 false为不合法
 */
function checkURL(str_url) {
  var strRegex = "^((https|http|ftp|rtsp|mms)?://)" 
  + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
        + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+.)*" // 域名- www. 
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名 
        + "[a-z]{2,6})" // first level domain- .com or .museum 
        + "(:[0-9]{1,4})?" // 端口- :80 
        + "((/?)|" // a slash isn't required if there is no file name 
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"; 
    var re=new RegExp(strRegex); 
    if (re.test(str_url)) {
        return (true); 
    } else { 
        return (false); 
    }
}
/**
 * 验证邮编是否合法
 * @param postCodeStr 邮编号码
 * @returns true为合法 false为不合法
 */
function checkpostCode(postCodeStr) {
	//邮编
	var pattern = /^[1-9]\d{5}$/;
	return pattern.test(postCodeStr);
}
/**
 * 检测图片类型是否支持
 * @param picType 图片类型 如：".jpg"
 * @returns {Boolean} true为合法 false为不合法
 */
function checkPicType(picType) {
	var picTypeArray = new Array(".jpg",".jpeg",".png",".bmp",".gif");
	for (var i = 0;i<picTypeArray.length;i++) {
		if (picTypeArray[i] == picType) {
			return true;
		}
	}
	return false;
}
/**
 * 判断字符串是否为空
 * @param str 字符串
 * @returns {Boolean}
 */
function isEmpty(str){
	if(str == null)
		return true;
	if(str == "")
		return true;
	// if(str.Trim() == "")
	// 	return true;
	return false;
}

/**
 * 判断价格是否合法
 * @param str
 * @returns
 */
function checkPrice(str){
	var patrn=/^\d+(\.[0-9]{0,2})?$/;
	var result = patrn.exec(str);
	if (result == null) {
		return false;
	}
	return result;
}
/**
 * 判断是否为整形
 * @param str
 * @returns
 */
function checkInteger(str){
	var patrn=/^\d{1,11}$/;
	return patrn.exec(str);
}
/**
 * 判断日期格式是否正确：yyyy-MM-dd HH:mm (没有秒)
 * @param str
 * @returns
 */
function checkDate(str) {
	var patrn=/^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s((([0-1][0-9])|(2?[0-3]))\:([0-5]?[0-9])))?$/;
	return patrn.exec(str);
}
/**
 * 判断日期格式是否正确：yyyy-MM-dd
 * @param str
 * @returns {Boolean}
 */
function checkDateYYYYMMDD(str){ 
	if (!/^19\d\d-[0-1]\d-[0-3]\d+$/.test(str) && !/^20\d\d-[0-1]\d-[0-3]\d+$/.test(str)) {
	  return false;
	} else {
	  return true;
	}
}

/**
 * 验证只能输入数字，输入其他内容时，替换为空字符串
 * @param obj
 * @returns {*|void|string}
 */
function verifyNumber(obj){
    return obj.value=obj.value.replace(/\D/g,'');
}
