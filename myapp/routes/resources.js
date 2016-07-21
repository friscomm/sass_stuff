var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('resources', {
        title: 'Resources'
    });
});

module.exports = router;
rts = router;
