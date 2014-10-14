'use strict';

angular.module('myApp.repos', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repos/:user/:name', {
            templateUrl: 'repos/repos.html',
            controller: 'Repos'
        });
    }])

    .controller('Repos', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $http.get('https://api.github.com/repos/' + $routeParams.user + '/' + $routeParams.name).success(function (data) {
            $scope.repo = data;
        });
    }]);
