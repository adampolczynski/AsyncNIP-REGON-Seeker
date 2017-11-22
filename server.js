const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/database');

// Connect To Database, handle it
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

const requests = require('./routes/requests');
const companies = require('./routes/companies');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/requests', requests);
app.use('/api/companies', companies);

app.use((req, res, next) => { // cors for express js
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 8080;

const server = app.listen(port, function() {
    console.log('App listening at http://%s:%s', 'localhost', port);
});

module.exports = app;