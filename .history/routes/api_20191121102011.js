const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    axios.get('https://www.potterapi.com/v1/house').then(response => {
        
    })
})


module.exports = router;