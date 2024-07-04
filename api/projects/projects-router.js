const express = require('express');
const Projects = require('./projects-model');
const { checkId, checkPost, checkPut } = require('./projects-middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get('/:id', checkId, (req, res, next) => {
  try {
    res.status(200).json(req.project);
  } catch (err) {
    next(err);
  }
});

router.post('/', checkPost, (req, res, next) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next)
});

router.put('/:id', checkId, checkPut, (req, res, next) => {
  Projects.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.delete('/:id', checkId, (req, res, next) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json(req.project);
    }) 
    .catch(next);
});

router.get('/:id/actions', checkId, (req, res, next) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(next);
});

module.exports = router;
