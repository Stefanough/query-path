const CompletedQuery = require('./CompletedQueryModel');

const CompletedQueryController = {

  getCompletedQuery(req, res) {
    CompletedQuery.find({}, (err, result) => {
      if (err) {
        console.log(err);
        res.status(418).send();
      } else {
        res.json(result);
      }
    });
  },

  createCompletedQuery(req, res) {
    const { query, solution } = req.body;
    let newCompletedQuery = { query, solution };

    CompletedQuery.create(newCompletedQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(418).send();
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = CompletedQueryController;
