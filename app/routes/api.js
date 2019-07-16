let express = require('express');
let router = express.Router();

const friendsController = require('../controllers').friends;

/* API routes */
router.get('/friends', friendsController.index);
router.get('/friends/:id', friendsController.show);

module.exports = router;
