'use strict';

var userController = require('./userController.js');

module.exports = function (router) {

  router.post('/signup', userController.signup);
  router.post('/signin', userController.signin);

  //router.post('api/user/edit', userController.edit);
  //router.get('/', userController.show);
};