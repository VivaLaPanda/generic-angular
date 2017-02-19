var appName = angular.module('appName', [
	'ngRoute',
	'ui.bootstrap',
	'ngMaterial',
	'ngAnimate',
	'ngMessages',
	'lfNgMdFileInput'
]);

appName.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('deep-orange');
});

appName.filter("trust", ['$sce', function($sce) {
	return function(htmlCode){
		console.log("Trusted HTML loaded")
		return $sce.trustAsHtml(htmlCode);
	}
}]);

'use strict';

