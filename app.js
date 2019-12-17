const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.post('/webhook/:data', function(req, res, next) {
    console.log('POST req received from piano...access being granted...')
    next()
}, function(req, res) {
    var data = req.params;
    res.status(200).send(data);
});

app.listen(port, () => console.log(`App running on port ${port}`));