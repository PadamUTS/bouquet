var express = require('express');
var router = express.Router();

/* GET sign in page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

module.exports = router;
