var express = require('express');
const ejs = require('ejs')
var app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.listen(port);

app.get('/', function (req, res) {
    res.render('index');
})