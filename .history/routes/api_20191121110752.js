require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
    var config = {
            key: process.env.API_KEY
    }
    axios.get('https://www.potterapi.com/v1/houses', config).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})


module.exports = router;