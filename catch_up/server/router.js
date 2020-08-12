const express = require('express');
const router = express.Router();


router.get('/', (reg, res) => {
    res.send('Yeah! Server is up and running').status(200);
});
module.exports = router;