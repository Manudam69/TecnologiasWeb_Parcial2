var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

    // configure the routes
    $routeProvider
        .when('/', {
            // route for the home page
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            // route for the about page
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            // route for the contact page
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .when('/services', {
            // route for the contact page
            templateUrl: 'pages/services.html',
            controller: 'contactController'
        })
        .otherwise({
            // when all else fails
            templateUrl: 'pages/routeNotFound.html',
            controller: 'notFoundController'
        });
});


app.controller("controlador", function ($scope) {
    $scope.contador = 0;
    $scope.home = 0;
    $scope.about = 0;
    $scope.aumentar = function () {
        $scope.home++;
    };
    $scope.aumentar1 = function () {
        $scope.about++;
    };

    if ($scope.home >= $scope.about) {
        $scope.contador = $scope.home;
    } else {
        $scope.contador = -1;
    }

});


app.controller('homeController', function ($scope) {
    $scope.message = 'Welcome to my home page!';
});
app.controller('aboutController', function ($scope) {
    $scope.message = 'Find out more about me.';
});
app.controller('contactController', function ($scope) {
    $scope.message = 'Contact us!';
});
app.controller('notFoundController', function ($scope) {

    $scope.message = 'There seems to be a problem finding the page you wanted';
    //$scope.attemptedPath = $location.path();

});
