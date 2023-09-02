(function($){
    $(function(){
        /* scroll to sections */
    $(".jq--scroll-me").click(function(){
        $("html, body").animate({scrollTop: $(".jq--me").offset().top-40},600);
    })

    $(".jq--scroll-news").click(function(){
        $("html, body").animate({scrollTop: $(".jq--news").offset().top-40},800);
    });
    
    $(".jq--scroll-galerie").click(function(){
        $("html, body").animate({scrollTop: $(".jq--galerie").offset().top-40},1000);
    });

    $(".jq--scroll-contact").click(function(){
        $("html, body").animate({scrollTop: $(".jq--contact").offset().top-40},1200);
    });

    $(".jq--scroll-prices").click(function(){
        $("html, body").animate({scrollTop: $(".jq--prices").offset().top-40},1400);
    });

    $(".jq--scroll-form").click(function(){
        $("html, body").animate({scrollTop: $(".jq--form").offset().top-40},1600);
    });

    $(".jq--btn-full").click(function(){
        $("html,body").animate({scrollTop: $(".jq--contact").offset().top-40},1200);
    });

    $(".jq--btn-empty").click(function(){
        $("html,body").animate({scrollTop: $(".jq--galerie").offset().top-40},1000);
    });

        /* mobile navigation */
        
    $(".jq--nav-icon").click(function(){
        $(".nav-background").fadeToggle(50);
        $(".mobile-nav-back").fadeToggle(50);
        $("nav ul").fadeToggle(50);
    });
   
        
        /* hamburger to cross and vice versa*/

        $(".jq--image-hamburger").click(function(){
        if($(".jq--image-hamburger").attr("src")=="images/hamburgerMenu.png")
        {
            $( $(".jq--image-hamburger").attr("src","images/crossMenu.png"));
        }
        else
        {
            $( $(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
        }
    });
});
})(jQuery);