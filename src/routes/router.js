const express = require('express');
const Controller = require('../controllers/controller');
const routeController = require('../controllers/route.controller')

const router = express.Router();

router.get('/', Controller.helloWorld);
// router.use('/user', Controller.helloWorld);
// router.get('/user', routeController.helloWorld);

module.exports = router;
