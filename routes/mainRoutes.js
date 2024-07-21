const express = require('express');
const MainController = require('../Controllers/MainController');
const router = express.Router();

router.get('/', MainController.index);
router.post('/inbox', MainController.inbox);
router.get('/check-inbox', MainController.checkMessage);
router.post('/delete-message/:id', MainController.destoryMessage);

module.exports = router;