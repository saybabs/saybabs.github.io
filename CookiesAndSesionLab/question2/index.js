const express = require('express');
const url     = require('url');
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: 'Najed Hatamleh secret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/result', (req, res) => {
    if (!req.session.information) {
        req.session.information = {}
      }

    console.log(req.session.information);
    req.session.information[req.body.name] = req.body.age;
    res.redirect('back');
});

app.listen(3000);