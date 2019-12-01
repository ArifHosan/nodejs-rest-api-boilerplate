const express = require('express');

const crudApiRouter = require('./api/crudApiRouter');
const apiHandler = require('./api/apiHandler');
const Employee = require('../models/employee');

const router = express.Router();

router.use('/employee', (req, res, next) => {
    req.crudApiRouter = crudApiRouter(Employee);
    next();
}, apiHandler);

// router.use('/employee', apiHandler);

module.exports = router;