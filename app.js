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

app.post('/piano-data', function(req, res) {
    
});

app.listen(port, () => console.log(`App running on port ${port}`));