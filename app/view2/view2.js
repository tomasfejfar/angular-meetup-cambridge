'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope, $http) {
      $scope.master = {};
      $scope.overlay = false;
      $scope.displayRepos = function(search) {
        $scope.overlay = true;
        $http.get('https://api.github.com/users/' + $scope.search + '/repos').success(function (data) {
          $scope.repos = data;
          $scope.overlay = false;
        });
      };
}]);
