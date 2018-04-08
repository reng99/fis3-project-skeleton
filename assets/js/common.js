var $navLi = $("#header .nav>li");
$navLi.hover(function(){
    $(this).children('ul').stop(true,true).slideDown(300);
},function(){
    $(this).children('ul').stop(true,true).slideUp(300);
});

var _pathname = window.location.pathname;
if(_pathname.indexOf('joinus')>0){
    $navLi.eq(3).addClass('active').siblings().removeClass('active');
}else if(_pathname.indexOf('foundation')>0||_pathname.indexOf('organization')>0){
    $navLi.eq(1).addClass('active').siblings().removeClass('active');
}else if(_pathname.indexOf('history')>0){
    $navLi.eq(2).addClass('active').siblings().removeClass('active');
}else{
    $navLi.eq(0).addClass('active').siblings().removeClass('active');
}