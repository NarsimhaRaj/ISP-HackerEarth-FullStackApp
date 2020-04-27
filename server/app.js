const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./Router/route');
const mongoose = require('mongoose');
// const controler = require('./Controller/controller');
require('dotenv').config();
mongoose.connect(process.env.DBCONNECTION, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

//mongoose connection events 
mongoose.connection.on("connected", () => {
    console.log("Successfully connected to database");
});
//if disconnected 
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected to database");
    process.exit(1);
});
//if any error in connecting to mongoose database
mongoose.connection.on("error", () => {
    console.log("Error in Connecting ");
    process.exit(1);
});


//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

//files configure
app.use(express.static(__dirname + "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/',routes);
// app.post('/insert', controler.insertData);

let port = process.env.PORT;
app.listen(port, function (err) {
    if (!err) {
        console.log("connected", port);
    }
});

module.exports = app;