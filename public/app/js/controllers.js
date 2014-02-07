'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('mainCtrl', ['$scope', 'productSuggest', function ($scope, productSuggest) {
        $scope.suggestProduct = {};
        productSuggest.init($scope);
        $scope.submit = function () {
            productSuggest.save($scope.suggestProduct, function () {
                $scope.suggestProduct = {};
                console.log('product success')
            });
        };
    }])
    .controller('categoryCtrl', ['$scope', '$routeParams', 'productSuggest', function ($scope, $routeParams, productSuggest) {
        $scope.category = $routeParams.category;
        $scope.suggestions= [];
        productSuggest.init($scope);
        productSuggest.subscribeRoom($scope.category,function(data){
            console.log(data);
            $scope.suggestions.push(data);
        });
    }]);