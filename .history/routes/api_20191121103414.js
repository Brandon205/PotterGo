require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var config = {
        headers: {
            key: process.env.
        }
    }
    axios.get('https://www.potterapi.com/v1/house', ).then(response => {
        res.json(response.data)
    })
})


module.exports = router;