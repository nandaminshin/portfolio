const express = require('express');
const MainController = require('../Controllers/MainController');
const router = express.Router();

router.get('/', MainController.index);
router.post('/send-email', MainController.sendEmail);
router.post('/download-cv', MainController.downloadCV);

module.exports = router;