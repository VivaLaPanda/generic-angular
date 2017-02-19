appName.directive('siteHeader',['$location', '$mdSidenav', '$route', function($location, $mdSidenav, $route, userFactory) {
    return {
        restrict: 'E',
        link: function($scope, $timeout){
            console.log("Header Linked");
			
			// ************************
			// Logged in status handling
			// ************************
			
			$scope.ui = {loggedIn : false } //default behavior show "login"
			
			$scope.ui.navLeftElements = [
				{
					'name' : "home",
					'text' : "Home",
					'href' : '/',
					'icon' : 'home'
				},
				{
					'name' : "nav1",
					'text' : "Nav1",
					'href' : '/',
					'icon' : 'subject'
				},
				{
					'name' : "nav2",
					'text' : "Nav2",
					'href' : '/',
					'icon' : 'layers'
				},
				{
					'name' : "nav3",
					'text' : "Nav3",
					'href' : '/',
					'icon' : 'phone'
				}
				
			]
        },
        templateUrl: 'app/views/directive/header.html'
  };
}]);
