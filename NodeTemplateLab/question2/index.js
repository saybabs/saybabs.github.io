const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render("index");
});


app.post('/result', (req, res) => {
    res.render("result", req.body);
});

app.listen(3000);