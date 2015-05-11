'use strict';

module.exports = function(req, res, next) {
  if (req.method === 'OPTIONS') {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, x-access-token'
    });
    res.send();
  } else {
    next();
  }
};
