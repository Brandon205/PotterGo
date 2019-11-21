require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://www.potterapi.com/v1/houses/', {key: '$2a$10$A19.0.6NiktkcrDPap/AMuF11EfNfmyeJ4TGrNJB2Ezz/aMd7sd8O'}).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})


module.exports = router;