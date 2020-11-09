const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('green')
    res.send({color:'green'});
})

module.exports = router;