

/*
    A controller meant to do nothing, for loading views that do nothing
*/
appName.controller('GenericController', ['$scope', '$location',
    function ($scope, $location) {
        console.log("generic controller loaded");
    }]);