require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/houses', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

router.get('/books', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

router.get('/foods', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

router.get('/wands', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

router.get('/', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

router.get('/', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})


module.exports = router;