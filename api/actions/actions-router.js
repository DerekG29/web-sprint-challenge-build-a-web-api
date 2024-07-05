const express = require('express');
const Actions = require('./actions-model');
const { checkId } = require('./actions-middlware');

const router = express.Router();

router.get('/', (req, res, next) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(next);
});

router.get('/:id', checkId, (req, res, next) => {
  try {
    res.status(200).json(req.action);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
