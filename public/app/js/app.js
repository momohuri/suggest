'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers',
        'ngResource',
        'ngSocket'
    ]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'app/partials/main.html', controller: 'mainCtrl'});
        $routeProvider.when('/category/:category', {templateUrl: 'app/partials/category.html', controller: 'categoryCtrl'});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);