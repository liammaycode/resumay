const express = require('express');
const app = express();
port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port);