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
            controller: 'servicesController'
        })
        .otherwise({
            // when all else fails
            templateUrl: 'pages/routeNotFound.html',
            controller: 'notFoundController'
        });
});



app.controller('homeController', function ($scope) {
    $scope.message = 'Te invitamos a conocer un lugar de descanso y relajación en el pueblo mágico, donde a través de nuestras bellas instalaciones y una atención personalizada, te consentiremos dándote momentos coloridos, llenos de sabores  y experiencias que caracterizan nuestra cultura Mexicana.';
});
app.controller('aboutController', function ($scope) {
    $scope.message = 'Descubre más sobre nosotros';
});
app.controller('contactController', function ($scope) {
    $scope.message = '¿Tiene usted alguna pregunta? Por favor no dude en contactarnos directamente. Nuestro equipo volverá a usted dentro unas horas para ayudarte.!';
    $scope.master = {};
    $scope.user = {};
    $scope.update = function (user) {
        $scope.master = angular.copy(user);
    };
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

});

app.controller('servicesController', function ($scope) {
    $scope.message = 'Nuestros servicios!';
});

app.controller('notFoundController', function ($scope) {

    $scope.message = 'Ocurrio un error buscando la pagina que buscabas';
    //$scope.attemptedPath = $location.path();

});
