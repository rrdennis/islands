var express = require('express');
var router = express.Router();
var islandsCtrl = require('../controllers/islands');

router.get('/', islandsCtrl.index);
router.get('/new', islandsCtrl.newIsland);

module.exports = router;
