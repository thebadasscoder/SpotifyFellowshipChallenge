const router = require('express').Router();

router.use('/people', require('./person-router'));

module.exports = router;