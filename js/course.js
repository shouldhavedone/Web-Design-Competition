$(function(){
    $(window).scroll(function () {
        if($(window).scrollTop() >= 1){  //当页面卷曲大于1时，设置背景色为渐变色
            $(".utility-bar").css({
                "background": "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(250, 240, 8, 1))"
            }, 1000);
            $(".hours, #utility-navigation>ul>li>a").css({
                "color": "rgb(140, 38, 51)"
            }, 1000);
            $("#primary-navigation").css({
                "background": "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(250, 240, 8, 1))"
            }, 1000);
        }else {//当页面无卷曲时，设置背景色为透明
            $(".utility-bar").css({
                "background": ""
            }, 1000);
            $(".hours, #utility-navigation>ul>li>a").css({
                "color": "#fff"
            }, 1000);
            $("#primary-navigation").css({
                "background": ""
            }, 1000);
        }
    });


    var index = 0;
    var lis = $(".cycle-slideshow li");
    $picon = $(".pager-icon");
    $hero = $("#hero");
    for(var i = 0; i < $picon.length; i++){
        $picon.eq(i).attr("index", i);
        $picon.eq(i).mouseenter(fn);
    }
    function fn() {
        var index = $(this).attr("index");
        lis.eq(index).fadeIn().siblings().fadeOut();
        $(this).addClass("current").stop().siblings().removeClass("current").stop();
    }

    function right() {
        index++;
        if (index == lis.length) {
            index = 0;
        }
        lis.eq(index).fadeIn().siblings().fadeOut();
        $picon.eq(index).addClass('current').stop().siblings().removeClass('current').stop();
    }
    var timeId = setInterval(function () {
        right();
    }, 3000);

    $hero.mouseleave(function () {
        timeId = setInterval(function () {
            right()
        }, 3000);
    });
    $hero.mouseenter(function(){
        clearInterval(timeId);
    });

    var $down = $(".scroll-down a");
    $down.click(function () {
        $(window).animate({scrollTop: 1010}, 3000);
    });

    $("#primary-navigation>ul>li").hover(function(){
        $(this).children('ul').stop(true,true).show(300);
    },function(){
        $(this).children('ul').stop(true,true).hide(300);
    });

});

jQuery(document).ready(function($) {

    var top_header = $(".parallax-content");
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
        var st = $(this).scrollTop()-1008;
        top_header.css({'background-position':'center calc(50% + '+(st*0.5) +'px)'});
    });

});


