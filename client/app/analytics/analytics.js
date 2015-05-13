angular.module('courageousTrapeze.analytics', [])

.controller('AnalyticsController', ['$scope', function($scope){
  $scope.clicks = [
    { 'time': 1, 'value': 22 }
  ];
}]);