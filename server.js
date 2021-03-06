const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const queryController = require('./QueryController');
const delQueryController = require('./DelQueryController');
const completedQueryController = require('./CompletedQueryController');

const PORT = 3000;

mongoose.connect('mongodb://localhost/querypath');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const queryRouter = express.Router();

app.get('/query', queryController.getQuery);
app.post('/query', queryController.createQuery);

app.post('/delquery', delQueryController.deleteQuery);

app.get('/completedqueries', completedQueryController.getCompletedQuery);
app.post('/completedqueries', completedQueryController.createCompletedQuery);

// app.use('/query', queryRouter);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = queryRouter;
