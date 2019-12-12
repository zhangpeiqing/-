$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
    $(".navb a").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('a').removeClass('hover');
             $(".lists").hide().eq(index).fadeIn(200);
        })
    })
    $(".navgg a").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('a').removeClass('hover');
             $(".des").hide().eq(index).fadeIn(200);
        })
    })
    $(".navke a").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('a').removeClass('hover');
            $(".keitem").html($(this).text())
             $(".kecon").hide().eq(index).fadeIn(200);
        })
    })
})