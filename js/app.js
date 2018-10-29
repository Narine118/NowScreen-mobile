$(document).foundation();

$(function(){
    
    // sliders
    if($(".clients-slider").length){
        $(".clients-slider").slick({
            dots: false,
            arrows: true,
            slidesToShow: 7,
             prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-thin-left2"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-thin-right2"></span></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                        infinite: true,
                        dots:false,
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 4,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
    if($(".studies-slider").length){
        $(".studies-slider").slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
       if($(".project-slider").length){
        $(".project-slider").slick({
            dots: false,
            arrows: false,
            slidesToShow:4,
            responsive: [
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
    if($(".thumbnails-slider").length){
        $(".thumbnails-slider").slick({
            dots: false,
            arrows: false,
            slidesToShow:3,
            responsive: [
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
    if($(".blog-slider").length){
        $(".blog-slider").slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                    centerMode: false,
                        dots:false,
                    }
                },
               {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        dots:false,
                    }
                }
            ]
        });
    }
    
    // animation
    $(".animate-children").each(function(){
       $(this).children().each(function(i){
            $(this).css("transition-delay", 0.2*(i-1) + "s");
       });
    });
    var scrolled = $(window).scrollTop(),
        windowHeight = $(window).height();
    $(".animate-children").each(function(){
        $(this).children().each(function(){
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).addClass("complete");
            }
        });
    });
    $(window).scroll(function(){
        scrolled = $(this).scrollTop();
        $(".animate-children").each(function(){
            $(this).children().each(function(){
                var eachImgOffsetTop = $(this).offset().top,
                    eachHeight = $(this).height();
                if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                    $(this).addClass("complete");
                }
            });
        });
    });
    
    // parallax
    $("[data-parallax=scroll]").each(function(){
        var parSrc = $(this).data("image-src");
        $(this).parallax({imageSrc: parSrc});
    });
    
    
    // mobile-menu
    $(".menu-open").click(function(e){
        e.preventDefault();
        $("body").addClass("open");
    });
    $(".menu-close").click(function(e){
        e.preventDefault();
        $("body").removeClass("open");
    });
    
    // Page Scrolling
    $("a[href^='#target']").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination
        }, 600);
    });
});
