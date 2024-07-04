const Projects = require('./projects-model');

module.exports = {
  checkId,
}

function checkId(req, res, next) {
  const id = req.params.id;
  Projects.get(id)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: `Project with ID ${id} not found` });
      } else {
        req.project = project;
        next();
      }
    })
    .catch(next);
}