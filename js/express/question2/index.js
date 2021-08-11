const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.use('/', (req, res) => {
 res.send("<form action=result method=post><label>Name: <input name=name type=text></label><label>Age<input name=age type=number></label><button type=submit>Submit Qurey</button></form>");
});


app.use('/result', (req, res) => {
    let { name, age } = req.body;

    res.send(`Welcome ${name} age: ${age}`)
});

app.listen(3000);


//first
const express    = require(`express`);
const app        = express();
var listOfItems = [];

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send(`<ul> 
    ${listOfItems.forEach(element => {
        <li>${element.name}</li>
      })}</ul>`);
});

//second
app.get('/add', (req, res) => {
 res.send("<form action=result method=post><label>Name: </label><input name=name type=text><button type=submit>Submit</button></form>");
});

//third
app.post('/add', (req, res) => {
    let { name } = req.body;

    listOfItems = listOfItems.push(name);
    res.send(listOfItems);
});

app.listen(3000);














