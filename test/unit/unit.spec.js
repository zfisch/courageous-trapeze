describe('App to be named by Zack', function() {

  describe('Auth', function(){
    var $scope, $rootScope, $location, $window, $httpBackend, createController, Auth;

    beforeEach(module('courageousTrapeze'));
    beforeEach(inject(function($injector) {
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $window = $injector.get('$window');
      Auth = $injector.get('Auth');


      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('AuthController', {
          $scope: $scope,
          $window: $window,
          $location: $location,
          Auth: Auth
        });
      };

      createController();
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
      $window.localStorage.removeItem('com.shortly');
    });    

    describe('Sign Up', function(){
      it('should have a signup method', function() {
        expect($scope.signup).to.be.a('function');
      });

      it('should store token in localStorage after signup', function() {
        // create a fake JWT for auth
        var token = 'sjj232hwjhr3urw90rof';

        // make a 'fake' reques to the server, not really going to our server
        $httpBackend.expectPOST('/api/users/signup').respond({token: token});
        $scope.signup();
        $httpBackend.flush();
        expect($window.localStorage.getItem('com.shortly')).to.be(token);
      });
    });

    describe('Sign In', function(){
      it('should have a signin method', function() {
        expect($scope.signin).to.be.a('function');
      });

      // it('should store token in localStorage after signin', function() {
      //   // create a fake JWT for auth
      //   var token = 'sjj232hwjhr3urw90rof';
      //   $httpBackend.expectPOST('/api/users/signin').respond({token: token});
      //   $scope.signin();
      //   $httpBackend.flush();
      //   expect($window.localStorage.getItem('com.shortly')).to.be(token);
      // });
    });
  });

});
