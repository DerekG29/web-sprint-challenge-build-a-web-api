const Actions = require('./actions-model');

module.exports = {
  checkId,
}

function checkId(req, res, next) {
  const id = req.params.id;
  Actions.get(id)
    .then(action => {
      if (!action) {
        res.status(404).json({ message: `No actions found with id ${id}`})
      } else {
        req.action = action;
        next();
      }
    })
    .catch(next);
}
