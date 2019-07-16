const Friend = require('../models').Friend;

module.exports = {
  index: (req, res) => {
    const query = {};
    const f = req.query.filter;
    if (f) {
      query.where = {
        $or: {
          email: {
            $like: `%${f}%`
          },
          firstName: {
            $like: `%${f}%`
          },
          lastName: {
            $like: `%${f}%`
          }
        }
      };
    }
    return Friend.findAll(query)
      .then(friends => res.status(200).send(friends))
      .catch(error => res.status(400).send(error));
  },
  show: (req, res) => {
    return Friend.findById(parseInt(req.params.id))
      .then(friend => {
        if (!friend) {
          return res.status(404).send({
            message: 'Friend Not Found'
          });
        }
        return res.status(200).send(friend);
      })
      .catch(error => res.status(400).send(error));
  }
};
