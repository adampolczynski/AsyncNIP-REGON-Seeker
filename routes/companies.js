const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Companies = require('../models/companies');

/* GET All */
router.get('/getAll', (req, res, next) => {
    Companies.getAll((err, companies) => {
        if (err) {
            res.json({success: false});
        } else {
            res.json({success: true, companies: companies});
        }
    });
});
/* POST get by number */
router.post('/getByNumber', (req, res, next) => {
    let number = req.body.number;
    Companies.getByNumber(number, (err, company) => {
        if (err) {
            res.json({success: false});
        } else {
            res.json({success: true, company: company});
        }
    });
});

module.exports = router;