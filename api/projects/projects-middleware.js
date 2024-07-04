const Projects = require('./projects-model');

module.exports = {
  checkId,
  checkPost
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

function checkPost(req, res, next) {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ message: 'a name and description are required' });
  } else {
    next();
  }
}