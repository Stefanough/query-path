const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const queryController = require('./QueryController');

const PORT = 3000;

mongoose.connect('mongodb://localhost/querypath');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const queryRouter = express.Router();

app.get('/', queryController.getQuery);

app.post('/', queryController.createQuery);

app.use('/query', queryRouter);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = queryRouter;
