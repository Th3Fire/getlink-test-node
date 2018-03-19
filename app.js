const express = require('express')
var bodyParser = require('body-parser');
const app = express()
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/myaction', function (req, res) {
    res.send('You sent the name "' + req.body.name + '".');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))