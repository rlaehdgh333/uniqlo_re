$(".navs :first-child").mouseenter(function () {
   $(this).children("ul").stop().animate({"height":210},500);
});
$(".navs :first-child").mouseleave(function () { 
    $(this).children("ul").stop().animate({"height":0},500);
});
$(function(){
    $('.banner_list').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
});

