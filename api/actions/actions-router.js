const express = require('express');
const Actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from actions router')
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
