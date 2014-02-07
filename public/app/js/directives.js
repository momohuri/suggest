'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('header', function () {
        return {
            restrict: 'AE',
            templateUrl: 'app/directives/header.html'
        };
    });