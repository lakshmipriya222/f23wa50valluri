var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result1 = Math.fround(x);
  var result2 = Math.random();
  var result3 = Math.round(y);
  res.send(`fround is applied to [${x}] is ${result1}<br>random is applied output is [${result2}]<br>round is applied to [${y}] is ${result3}`);
});

module.exports = router;
