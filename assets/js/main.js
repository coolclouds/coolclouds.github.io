(function($) {

skel
    .breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

$(function() {

    var	$window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

    // Fix: Placeholder polyfill.
        $('form').placeholder();

    // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

    // Nav.
        jQuery(document).ready(function(){
            var links = $('.nav').find('li');
            var htmlbody = $('html,body');
            
            if( $('.cd-stretchy-nav').length > 0 ) {
                var stretchyNavs = $('.cd-stretchy-nav');

                stretchyNavs.each(function(){
                    var stretchyNav = $(this),
                        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

                    stretchyNavTrigger.on('click', function(event){
                        event.preventDefault();
                        stretchyNav.toggleClass('nav-is-visible');
                    });
                });

                $(document).on('click', function(event){
                    ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
                });
            }
            
            //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
            function goToByScroll(dataslide) {
                var offset_top = ( dataslide == 'banner' ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;

                htmlbody.stop(false, false).animate({
                    scrollTop: offset_top
                }, 1500, 'easeInOutQuart');
            }
            
            //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
            links.click(function (e) {
                e.preventDefault();
                dataslide = $(this).attr('data-slide');
                goToByScroll(dataslide);
            });
            
            // owls
            $("#owl").owlCarousel({
                autoPlay: 5000,
                items : 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,2]
            });
            $("#owl-menu").owlCarousel({
                items : 1,
                itemsDesktop : [1199,1],
                itemsDesktopSmall : [979,1],
                navigation : true,
                pagination : false
            });
            
            $('#whatsNitro').popup({
                transition: 'all 0.3s'
            });
            
        });
});

})(jQuery);