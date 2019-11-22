require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/user');

// HOUSES
router.get('/houses', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/characters/?key=${process.env.API_KEY}`).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// BOOKS 
router.get('/books', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// FOODS AND DRINKS
router.get('/foods', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/houses/?key=${process.env.API_KEY}`).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

// WANDS
router.get('/wands', (req, res) => {
    axios.get(`https://www.potterapi.com/v1/characters/?key=${process.env.API_KEY}`).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(`================================================================================
        ================================${err}`)
    })
})

//USER ITEMS
router.get('/userInfo', (req, res) => {
    console.log(req.query.id)
    User.findById(req.query.id, (err, user) => {
        console.log(user)
        let data = [];
        for (let i = 0; i < 4; i++) {
            if (user.wand) {
                data.push(user.wand)
            }
        }
        res.json(data)
    }).catch(err => console.log(err))
})

module.exports = router;