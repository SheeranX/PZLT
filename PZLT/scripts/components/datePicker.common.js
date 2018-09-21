//时间日期格式化
var formatDate = (function(){
    /*
     * date:被格式的日期
     * fmtType: int 类型的值 0：yyyy-MM-dd，1：yyyy-MM-dd hh:mm:ss
     * 可以不传 fmtType 不传则为默认 yyyy-MM-dd
     * **/
   function newDate(date,fmtType){
       if(date)
       {
           var formtType = fmtType||0;
           var fmt = '';
           switch (formtType) {
               case 0:
                   fmt = 'yyyy-MM-dd'
                   break
               case 1:
                   fmt = 'yyyy-MM-dd hh:mm:ss'
                   break
               case 2:
                   fmt = 'hh:mm:ss'
                   break
               default:
                   fmt = 'yyyy-MM-dd'
           }
           Date.prototype.Format = function (fmt) {
               var o = {
                   "M+": this.getMonth() + 1, //月份
                   "d+": this.getDate(), //日
                   "h+": this.getHours(), //小时
                   "m+": this.getMinutes(), //分
                   "s+": this.getSeconds(), //秒
                   "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                   "S": this.getMilliseconds() //毫秒
               };
               if (/(y+)/.test(fmt)) {
                   fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
               }
               for (var k in o)
                   if (new RegExp("(" + k + ")").test(fmt))
                       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
               return fmt;
           }
           return new Date(date).Format(fmt);
       }
       else
           return ""
   }

   /*
   *@param dateType string '0':今天；'1':昨天；'2':本周 '3'：上周 '4':本月; '5'：上月
   *@param formatType number 0:'yyyy-MM-dd' ; 1:'yyyy-MM-dd hh:mm:ss' ; 2:'hh:mm:ss'
   * */
   function getDurationTime(dateType,formatType){
       var now = new Date();
       var nowDayOfWeek = now.getDay()+1; //今天本周的第几天
       var nowDay = now.getDate(); //当前日
       var nowMonth = now.getMonth(); //当前月

       var nowYear = now.getYear(); //当前年

       nowYear += (nowYear < 2000) ? 1900 : 0; //

       var lastMonthDate = new Date(); //上月日期
       
       lastMonthDate.setDate(1);
       lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
       var lastYear = lastMonthDate.getYear();
       var lastMonth = lastMonthDate.getMonth();

       var format = formatType||0;

       //获得某月的天数
       var getMonthDays  = function (myMonth) {
           var monthStartDate = new Date(nowYear, myMonth, 1);
           var monthEndDate = new Date(nowYear, myMonth + 1, 1);
           var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
           return days;
       }

        var duration = null;

        switch (dataType) {
            case '0'://今天
                duration = newDate(now,format);
                break
            case '1'://昨天
                now.setDate(now.getDate() - 1);
                duration = newDate(now,format);
                break
            case '2'://本周
                var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
                var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
                duration = [newDate(weekStartDate,format),newDate(weekEndDate,format)];
                break
            case '3'://上周
                var lastWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7);
                var lastWeekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 1);
                duration = [newDate(lastWeekStartDate,format),newDate(lastWeekEndDate,format)];
                break;
            case '4'://本月
                var monthStartDate = new Date(nowYear, nowMonth, 1);
                var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
                duration = [newDate(monthStartDate,format),newDate(monthEndDate,format)];
                break;
            case '5'://上月
                var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
                var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
                duration = [newDate(lastMonthStartDate,format),newDate(lastMonthEndDate,format)];
                break;
            default:
                duration = newDate(now);//默认今天
        }
   }

   return {
       newDate:newDate,
       getDurationTime:getDurationTime
   }
})();