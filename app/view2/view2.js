'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
        $scope.master = {};
        $scope.overlay = false;
        $scope.displayRepos = function (search) {
            $scope.overlay = true;
            $http.get('https://api.github.com/users/' + search + '/repos').success(function (data) {
                $scope.repos = data;
                $scope.overlay = false;
            });
        };
        $scope.displayRepos('tomasfejfar');

        $scope.order = function (predicate, reverse) {
            var orderBy = $filter('orderBy');
            $scope.repos = orderBy($scope.repos, predicate, reverse);
        }
    }]);
