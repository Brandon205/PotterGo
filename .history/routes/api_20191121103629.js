require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var config = {
        headers: {
            key: process.env.API_KEY
        }
    }
    axios.get('https://www.potterapi.com/v1/house', headers).then(response => {
        res.json(response.data)
    })
})


module.exports = router;