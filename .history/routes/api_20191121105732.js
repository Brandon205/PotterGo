require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var config = {
        headers: {
            key: process.env.API_KEY
        }
    }
    axios.get('https://www.potterapi.com/v1/house', config).then(response => {
        console.log('in the get route')
        res.json(response.data)
    })
})


module.exports = router;