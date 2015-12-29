angular.module("app").controller("mainCtrl", function($scope,$timeout,$mdSidenav,$mdMedia,$mdDialog){
    
    /* page loader */
        $scope.loading = true;

        angular.element(document).ready(function () {
            $timeout(function(){
                $scope.loading = false;
            },2000)
        });
    
    /* navigation */
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID).toggle().then(function(){
                    extendBackdrop();
                });

            }
        }

        function closeLeftNav() {
            $mdSidenav('leftnav').close();
        };

        function extendBackdrop() {
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var newValue = docHeight + winHeight - docHeight*2;
            $(".md-sidenav-backdrop").css("bottom", newValue);
        }
    
        $scope.toggleLeft = buildToggler('leftnav');

        $scope.navigate = function(section){
            if(!($mdMedia('gt-sm'))) {
                closeLeftNav();
            };

            $('html, body').animate({
                scrollTop: $('#'+section).offset().top
            }, 600);
        };

        $scope.toTop = function(){
            $('html, body').animate({
                scrollTop: $('#page-top').offset().top
            }, 600);
        };
    
    /* owls */
        var owlMast = $("#owl-mast");
        owlMast.owlCarousel({
            autoPlay: 7000,
            pagination: false,
            singleItem:true
        });
    
        var owlGal = $("#owl-gal");
        owlGal.owlCarousel({
            autoPlay: 3000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,2],
            stopOnHover : true,
            lazyLoad : true
        });
    
    /* dialog */
        $scope.showWhatsNitro = function() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('What is Liquid Nitrogen?')
                    .textContent('Liquid nitrogen is nitrogen in a liquid state at an extremely low temperature (-320). Nitrogen actually makes up approximately 78% of the air you breathe. So dont worry, its completely safe! And according to food science experts, rapid freezing preserves the nutrients in food.')
                    .ariaLabel('What is Liquid Nitrogen dialog box')
                    .ok('Nice!')
                    .openFrom('#leftnav')
                    .closeTo('#footer')
            );
        };
});
