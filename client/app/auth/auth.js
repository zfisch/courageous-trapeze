angular.module('courageousTrapeze.auth', [])

.controller('AuthController', ['$scope', 'Auth', function($scope, Auth) {
  $scope.user = {};
  $scope.user.username = '';
  $scope.user.password = '';

  $scope.signin = function(){
    Auth.signin($scope.user);
  };

  $scope.signup = function(){
    Auth.signup($scope.user);
  };
}]);
