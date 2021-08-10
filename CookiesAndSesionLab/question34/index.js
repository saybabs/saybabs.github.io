const express = require('express');
const router  = require("./router");
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(session({
    secret: 'Najed Hatamleh secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}));

app.use('/products', router);

app.listen(3000);