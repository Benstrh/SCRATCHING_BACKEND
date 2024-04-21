const express = require('express');
const {register, allUsers} = require('../controllers/user.controller');
const Controller = require('../controllers/route.controller');

const router = express.Router();

router.post('/register', register);
router.get('/all', allUsers)
// console.log('HALO PAK EKO!')
// module.exports = router;
module.exports = userRoute;

// const express = require('express');

// const router = express.Router();

// router.get('/', Controller.helloWorld);

// module.exports = router;