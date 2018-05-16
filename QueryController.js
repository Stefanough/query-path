const Query = require('./QueryModel');

const QueryController = {

  getQuery(req, res) {
    Query.find({}, (err, result) => {
      if (err) {
        console.log(err);
        res.status(418).send();
      } else {
        res.json(result);
      }
    });
  },
  
  deleteQuery(req, res) {
    const { query } = req.body;
    Query.deleteOne({ query }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(418).send();
      } else {
        res.json(result);
      }
    });
  },

  createQuery(req, res) {
    const { query } = req.body;
    let newQuery = { query };

    Query.create(newQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(418).send();
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = QueryController;
