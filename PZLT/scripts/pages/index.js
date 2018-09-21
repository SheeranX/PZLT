'use strict';

var breadNav = [];
$('body').on('click','.panel-title-content',function(){
    $(this).find('.nav-arrow').toggleClass('fa-angle-right').toggleClass('fa-angle-down');
    $(this).parent().parent().parent().siblings().find('.nav-arrow').addClass('fa-angle-right').removeClass('fa-angle-down')
});
//左侧导航栏点击对应效果
$('body').on('click','.nav-to-page',function() {
    $(this).addClass('nav-active')
        .siblings().removeClass('nav-active')
        .parent().parent().parent().siblings()
        .find('.nav-active').removeClass('nav-active');


    var currentNav = $(this).text();
    var currentLink = $(this).attr('href');
    var target = $('#mainframe').attr('name');

    var first = $(this).parent().parent().prev().find('.group-name').text();

    breadNav[0] = '<span class="fa fa-home"></span> 您所在的位置：首页'
    breadNav[1] = first;
    breadNav[2] = currentNav;
    var li = "";
    for(var i=0;i<breadNav.length;i++){
        if(i==(breadNav.length-1))
        {
            li+='<li class="active"><a href="'+currentLink+'" target="'+target+'" id="backUrl">'+breadNav[i]+'</a></li>'
        }
        else
        {
            li+='<li>'+breadNav[i]+'</li>'
        }
    }
    var tabName = "<li role='presentation' class='active'><a href='"+currentLink+"'>"+currentNav+"</a></li>";
    $('#breadNav').html(li);
    $('#navTab>ul').html(tabName);
});
//左侧导航栏对应调整
$(".nav-left-collapse").click(function(){
    $('.panel-group').toggleClass('nav-collpase-mini').prev().toggleClass('nav-left-mini');
    $('.main-content').toggleClass('main-content-left');
    $(this).parent().toggleClass('bg-white').next().toggleClass('clear-padding');
});


$('.nav-left .panel').click(function(){
    // if($('.panel-group').hasClass('nav-collpase-mini'))
    // {
    //     return false
    // }
}).mouseover(function(){
    if($('.panel-group').hasClass('nav-collpase-mini'))
    {$(this).find(".collapse-mini").show().css('position','absolute');
        $(this).find('.panel-heading').addClass('bg-white');}
}).mouseout(function(){
    if($('.panel-group').hasClass('nav-collpase-mini'))
    {
        $(this).removeClass('bg-white').find(".collapse-mini").hide().css('position','relative');
        $(this).find('.panel-heading').removeClass('bg-white');
    }
})


$('.main-content .nav-tabs li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$("#mainframe").contents().find("body").css({'overflow-y':'hidden','min-width':'1000px'})

//页面resize时改变导航条的宽度
$(window).resize(function(){
    if($(this).width()<1200) {
        if($('.nav-left-collapse').hasClass('nav-left-mini'))
            return
        $('.nav-left-collapse').click()
    }
    else
    {
        if($('.nav-left-collapse').hasClass('nav-left-mini'))
             $('.nav-left-collapse').trigger('click');
        else return

    }
})
//页面加载完毕之后执行的方法
$(document).ready(function(){
    $(window).trigger('resize');
    var localTime = '';
    //时间格式化
setInterval(function () {
        localTime = new Date();
        var time = formatDate.newDate(localTime,2);
        //日期格式化
        var date = formatDate.newDate(localTime,0);
        var dateArr = date.split('-');
        var newFormat = dateArr[0]+'年'+dateArr[1]+'月'+dateArr[2]+"日";
    $('.header-time').text(newFormat);
        $('.header-date').text(time);
    },1000)
})
//iframe相关页面调整插件
$('iframe').iFrameResize([{
        log: true,
}]);








