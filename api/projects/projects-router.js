const express = require('express');
const Projects = require('./projects-model');
const { checkId } = require('./projects-middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get('/:id', checkId, (req, res) => {
  
});

router.post('/', (req, res) => {

});

router.put('/:id', checkId, (req, res) => {

});

router.delete('/:id', checkId, (req, res) => {

});

router.get('/:id/actions', checkId, (req, res) => {

});

module.exports = router;
