angular.module("app", ['ngMaterial'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue',{'default': '50'})
        .accentPalette('green',{'default': '700'});
});