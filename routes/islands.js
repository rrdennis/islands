var express = require('express');
var router = express.Router();
var islandsCtrl = require('../controllers/islands');
var notesCtrl = require('../controllers/notes');

router.get('/', islandsCtrl.index);
router.post('/', islandsCtrl.createSong);

router.get('/new', islandsCtrl.newSong);

router.get('/:id/notes/new', notesCtrl.newNote);

router.get('/:id/update', islandsCtrl.showUpdate);

router.put('/:id', islandsCtrl.updateSong);
router.get('/:id', islandsCtrl.showSong);

router.delete('/:id', islandsCtrl.deleteSong);

module.exports = router;
