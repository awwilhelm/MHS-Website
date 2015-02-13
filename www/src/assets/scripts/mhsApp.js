var mhsApp = angular.module('mhsApp', [
    'ngRoute',
    'mhsMainCtrl'
])

mhsApp.controller('mhsMainCtrl', function ($scope) {
    $(document).ready( function() {
        $("#load_home").on("click", function() {
            $("#content").load("content.html");
        });
    });

    
})

.config(['$routeProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'template/home.html',
            //controller: 'mhsMainCtrl'
        })
        .when('/terrain', {
            templateUrl: 'template/terrain.html',
            //controller: 'PhoneDetailCtrl'
        })
        .when('/argumentation', {
            templateUrl: 'template/argumentation.html',
            //controller: 'PhoneDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
        $locationProvider.html5Mode(true);
    }]);