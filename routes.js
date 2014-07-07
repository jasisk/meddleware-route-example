'use strict';

module.exports = function (router) {
  router.route(/.*/).all(function (req, res) {
    var token = res.locals._csrf || 'unknown';
    res.send(token);
  });
};
