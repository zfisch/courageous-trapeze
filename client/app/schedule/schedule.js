'use strict';
var schedule = angular.module('courageousTrapeze.schedule', []);

schedule.controller('ScheduleController', ['$scope', 'Messages', 'Contacts', '$document', function ($scope, Messages, Contacts, $document) {
  $scope.message = {
    contactId: '',
    text: '',
    date: '',
    status: 'scheduled'
  };
  $scope.contacts = [];

  $scope.$on('$viewContentLoaded', function () {
    var promise = Contacts.fetch();
    promise.then(function (response) {
      $scope.contacts = response;
    });
    $scope.notification = '';
  });

  $scope.setContact = function (contact, $event) {
    $scope.message.contactId = contact._id;
    $event.target.classList.toggle('selectedContact');
  };
  $scope.addMessage = function (message) {
    $scope.loading = true;

    Messages.addMessage(message)
    .success(function () {
      $scope.message.contactId = '';
      $scope.message.text = '';
      $scope.message.date = '';
      $scope.loading = false;
      var result = document.getElementsByClassName('selectedContact');
      angular.element(result).removeClass('selectedContact');
      $scope.notification = 'Good work, your message is scheduled!';
    })
    .error(function () {
      $scope.loading = false;
    });
  };

}]);



