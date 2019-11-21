require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios')

// HOUSES

router.get('/houses', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/spells/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// BOOKS 
router.get('/books', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// FOODS AND DRINKS
router.get('/foods', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// WANDS
router.get('/wands', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        console.log('====================in the get route=======================')
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})




module.exports = router;