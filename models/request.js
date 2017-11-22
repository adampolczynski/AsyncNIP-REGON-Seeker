const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

const RequestSchema = mongoose.Schema({
    headers: {
        type: String,
    },
    asked: {
        type:String,
    },
    time: {
        type: Date,
        default: Date.now
    },
});

const Request = module.exports = mongoose.model('request', RequestSchema);

module.exports.getAll = function(callback){
    Request.find({}, callback);
};

module.exports.addRequest = function(askedNumber, callback){
    let request = new Request({asked:askedNumber, headers:'headers'});
    request.save(callback);
};
