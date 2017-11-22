const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Define schema
const CompaniesSchema = mongoose.Schema({
    REGON: {
        type: String,
    },
    NIP: {
        type: String,
    },
    KRS: {
        type: String,
    },
    name: {
        type: String,
    },
    province: {
        type: String, // wojewodztwo
    },
    county: {
        type: String, // powiat
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
    // we have to look for NIP, REGON and KRS
    Companies.findOne({$or:[{NIP:number},{REGON:number},{KRS:number}]}, callback);//NIP:number
};
