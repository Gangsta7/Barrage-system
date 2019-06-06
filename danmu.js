//监听宽度根据屏幕宽度改变动画
$(window).resize(function(){
var width =$('.danmutxt').width()
var style1 = document.createElement('style');
var sty =document.getElementsByTagName('style')[0]
style1.innerHTML = "@-webkit-keyframes show{0%{transform: translateX("+width+"px);opacity:0}20%{opacity:1}90%{opacity: 0.3;}100%{transform: translateX(-100px);opacity:0}}";
document.head.removeChild(sty);
document.head.appendChild(style1);
})


$(document).ready(function() {
var arr = ['干杯🍻','7777777','冲鸭','我恰柠檬🍋','2333','我好了','???','马上到🕊'];
var height =$('.danmutxt').height()
var width =$('.danmutxt').width()
//根据屏幕宽度改变动画
    var style1 = document.createElement('style');
    style1.innerHTML = "@-webkit-keyframes show{0%{transform: translateX("+width+"px);opacity:0}20%{opacity:1}90%{opacity: 0.3;}100%{transform: translateX(-100px);opacity:0}}";
    document.head.appendChild(style1);

//监听回车事件
$('#damtxt').keydown(function(event){
    // alert(event.which)
    if(event.which==13){
      $('.damst').trigger('click')
    }
})
//点击事件
$('.damst').click(function(){
    var red = parseInt(Math.random()*257).toString(16);
    var blue = parseInt(Math.random()*257).toString(16);
    var green= parseInt(Math.random()*257).toString(16);
    var color = '#'+red+blue+green;
    //转换成16进制的随机颜色
    var numtxt = parseInt((Math.random()+0.3)*50);
    var fonts = numtxt+'px'
    //随机字体大小
    var num = parseInt((Math.random()+0.5)*10);
    var numt =num+'000' //duanmums显示时间
    var speed ='show '+num+'s'+' ease-in-out both'
    //随机速度
    var top =parseInt(Math.random()*(height-50))+'px'
    //界面中的随机高度
    t=$('#damtxt').val()
    document.getElementById('damtxt').value=''
    //获取input框的值并且清除
    arr.push(t)
    var text=$('<div class="duanmums"></div>')
    text.text(t);
    $(text).css('color',color)
    $(text).css('animation',speed)
    $(text).css('fontSize',fonts)
    $(text).css('top',top)
    $(".danmutxt").append(text);
    //生成class为duanmums的元素插入danmutxt后
    setTimeout(function(){
        $(text).remove()
    }, numt);
    //一定时间删除后duanmums
})

//随机播放数组中的一条弹幕
setInterval(function(){
    var red = parseInt(Math.random()*257).toString(16);
    var blue = parseInt(Math.random()*257).toString(16);
    var green= parseInt(Math.random()*257).toString(16);
    var color = '#'+red+blue+green;
    //转换成16进制的随机颜色
    var numtxt = parseInt((Math.random()+0.3)*50);
    var fonts = numtxt+'px'
    //随机字体大小
    var num = parseInt((Math.random()+0.5)*10);
    var numt =num+'000' //duanmums显示时间
    var speed ='show '+num+'s'+' ease-in-out both'
    //随机速度
    var top =parseInt(Math.random()*(height-50))+'px'
    //界面中的随机高度

    var text=$('<div class="duanmums"></div>')
    text.text(arr[parseInt(Math.random()*arr.length)]);//随机插入
    $(text).css('color',color)
    $(text).css('animation',speed)
    $(text).css('fontSize',fonts)
    $(text).css('top',top)
    $(".danmutxt").append(text);
    //生成class为duanmums的元素插入danmutxt后
    setTimeout(function(){
        $(text).remove()
    }, numt);
},2500)

//清除
$('.damclose').click(function(){
    $('.duanmums').each(function(){
        $(this).remove()
    })
})
})
