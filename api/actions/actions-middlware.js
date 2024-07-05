const Actions = require('./actions-model');
const Projects = require('../projects/projects-model')

module.exports = {
  checkId_actions,
  checkPost_actions,
}

function checkId_actions(req, res, next) {
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

async function checkPost_actions(req, res, next) {
  try {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
      res.status(400).json({
        message: 'project_id, description, and notes are required'
      });
    } else {
      const project = await Projects.get(project_id);
      if (!project) {
        res.status(404).json({
          message: `Project with id ${project_id} not found`
        });
      } else {
        next();
      }
    }
  } catch (error) {
    next(error);
  }
}
