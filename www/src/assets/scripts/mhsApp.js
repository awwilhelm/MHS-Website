var mhsApp = angular.module('mhsApp', [
    'ngRoute'
])

mhsApp.controller('mhsMainCtrl', function ($scope) {

    
})

.config(['$routeProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            //controller: 'mhsMainCtrl'
        })
        .when('/terrain', {
            templateUrl: 'terrain.html',
            //controller: 'PhoneDetailCtrl'
        })
        .when('/argumentation', {
            templateUrl: 'argumentation.html',
            //controller: 'PhoneDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
        //$locationProvider.html5Mode(true);
    }]);