const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/piano-data', function(req, res, next) {
    console.log("A GET request was made to /piano-data.");
    res.end();
});

app.post('/piano-data', function(req, res, next) {
    console.log('POST req received from piano...access being granted...')
    next()
}, function(req, res) {
    console.log(req.body);
    res.json(req.body);
});

app.listen(port, () => console.log(`App running on port ${port}`));