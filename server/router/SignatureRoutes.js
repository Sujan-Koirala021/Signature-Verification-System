const express = require('express');
const multer = require('multer');
const path = require('path');

const extractionController = require('../controller/extractionController');
const verifyController = require('../controller/verifyCoontroller');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.route('/extract-signature').post(upload.single("document"), extractionController.extractSignature);
router.route('/verify-signature').post(upload.array('signature', 2), verifyController.verifySignature);

module.exports = router;
