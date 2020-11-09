const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('blue')
    res.send({color:'blue'});
})

module.exports = router;