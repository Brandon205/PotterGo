require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://www.potterapi.com/v1/houses', process.env.API_KEY).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})


module.exports = router;