$(function () {

    var imgObjs = $("#wrap img");
    var imgL = imgObjs.length;
    var Deg = 360 / imgL;
    var roY = 0, roX = -10, xN, yN, play=null;

    imgObjs.each(function(i) {
        $(this).css('transform', 'rotateY('+ i * Deg +'deg) translateZ(450px)').attr('ondragstart','return false');
    });

    $("#person").mousedown(function(ev) {
        clearInterval(play);
        var x_ = ev.clientX;
        //获取当前鼠标相对于浏览器页面（或客户区）的 x 方向的位置并保存在变量x_
        var y_ = ev.clientY;

        $(this).bind('mousemove',function(ev){
            var x = ev.clientX;
            //获取当前鼠标相对于浏览器页面（或客户区）的  x  方向的位置    保存在变量 x
            var y = ev.clientY;

            xN = x - x_;
            //计算鼠标在当前元素内 相对 上次鼠标按下时的 x轴距离  并保存在变量
            yN = y - y_;
            //计算鼠标在当前元素内 相对 上次鼠标按下时的 y轴距离  并保存在变量

            roY += xN*0.2;
            //按照比例换算  并在变量基础上增加
            roX +=yN*0.07;
            //按照比例换算  并在变量基础上增加

            $('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)');

            x_ = ev.clientX;
            y_ = ev.clientY;
        });
    }).mouseup(function(){
        $(this).unbind('mousemove');

        var play = setInterval(function(){
            //开始周期性计时器
            xN = xN * 0.95;
            yN = yN * 0.95;
            //按照比例换算
            if ( Math.abs(xN) <= 0.5 && Math.abs(yN)<= 0.5 )
            {
                clearInterval( play );
            }
            roY += xN*0.2;
            roX +=yN*0.07;
            //按照比例换算  并在变量基础上增加
            $('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)');
        },30);
        //计时器每30毫秒触发一次
    });

    imgObjs.click(function () {
        
    });

});


