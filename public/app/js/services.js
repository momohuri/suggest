'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .factory('productSuggest', [ '$socket',
        function ($socket) {
            var productSuggest;
            var callbacks = {};
            productSuggest = {
                init: function ($scope) {
                    $socket.on('createdSuggestionSuccess', $scope, function () {
                        callbacks['createSuggestion']();
                    });
                    $socket.on('newSuggestion', $scope, function (data) {
                        callbacks['newSuggestion'](data);
                    });
                },
                save: function (data, next) {
                    $socket.emit('createSuggestion', data);
                    callbacks['createSuggestion'] = next;
                },
                subscribeRoom: function (room, next) {
                    $socket.emit('joinCategory', room);
                    callbacks['newSuggestion'] = next;

                }
            };
            return productSuggest
        }]);


