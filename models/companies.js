const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Define schema
const CompaniesSchema = mongoose.Schema({
    REGON: {
        type: String,
        required: false
    },
    NIP: {
        type: String,
        required: false
    },
    KRS: {
        type: String,
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
        type: String,
    }
});

const Companies = module.exports = mongoose.model('companies', CompaniesSchema);

module.exports.getAll = function(callback){
    Companies.find({}, callback);
};

module.exports.getByNumber = function(number, callback){
    Companies.find({}, callback);//NIP:number
};
