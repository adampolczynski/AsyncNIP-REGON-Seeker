const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Define schema
const CompaniesSchema = mongoose.Schema({
    REGON: {
        type: Number,
        required: false
    },
    NIP: {
        type: Number,
        required: false
    },
    KRS: {
        type: Number,
        required: false
    },
    name: {
        type: String,
    },
    province: {
        type: String, // wojewodztwo
    },
    county: {
        type: String, // powiat
        required: false,
    },
    commune: {
        type: String, // gmina
    },
    city: {
        type: String, // miejscowosc
    },
    street: {
        type: String,
    },
    postal: {
        type: Number,
    }
});

const Companies = module.exports = mongoose.model('companies', CompaniesSchema);

module.exports.getAll = function(callback){
    Companies.find({}, callback);
};

module.exports.getByNumber = function(number, callback){
    Companies.findOne({NIP:number}, callback);
};