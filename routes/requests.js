const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Request = require('../models/request');

router.post('/addRequest', (req, res, next) => {
    let number = req.body.number;
    Request.addRequest(number, (err) => {
        if (err) {
            res.json({success: false});
        } else {
            res.json({success: true});
        }
    });
});

module.exports = router;