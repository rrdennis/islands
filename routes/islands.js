var express = require('express');
var router = express.Router();
var islandsCtrl = require('../controllers/islands');

router.get('/', islandsCtrl.index);
router.post('/', islandsCtrl.createSong);

router.get('/new', islandsCtrl.newSong);

router.get('/:id', islandsCtrl.showSong);

module.exports = router;
