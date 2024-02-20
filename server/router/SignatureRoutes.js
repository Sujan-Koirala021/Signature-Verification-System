const express = require('express');
const multer = require('multer');
const path = require('path');

// const extractionController = require('../controller/extractionController');
const verifySignatureController = require('../controller/verifyUsingSignatureController');
const verifyDocumentController = require('../controller/verifyUsingDocumentController')

const router = express.Router();

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        // Specify the directory based on the field name
        if (file.fieldname === 'genuine') {
            cb(null, './uploads/genuine/');
        } else if (file.fieldname === 'verificationImage') {
            cb(null, './uploads/verification/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// router.route('/extract-signature').post(upload.single("document"), extractionController.extractSignature);
router.route('/verify-signature').post(upload.fields([{ name: 'genuine', maxCount: 1 }, { name: 'verificationImage', maxCount: 1 }]), verifySignatureController.verifyUsingSignature);
router.route('/verify-document').post(upload.fields([{ name: 'genuine', maxCount: 1 }, { name: 'verificationImage', maxCount: 1 }]), verifyDocumentController.verifyUsingDocument);
module.exports = router;
