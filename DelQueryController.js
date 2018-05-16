const Query = require('./QueryModel');

const DelQueryController = {

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
}

module.exports = DelQueryController;
