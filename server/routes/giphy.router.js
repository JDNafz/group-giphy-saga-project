const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');


const router = express.Router();

require("dotenv").config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


router.get('/gifs/:searchTerm', (req, res) => {
    const limit = 10;
    const searchTerm = req.params.searchTerm

  let urlString = `https://api.giphy.com/v1/gifs/search?api_key=SXKnb0hkhpZde43Hk9cjkVOoM5HJoyJd&q=${searchTerm}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`
    })
        .then((response) => {
            console.log("get to giphy trending success!", response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log("get to giphy trending error!", err);
            res.sendStatus(500);
        })
})


module.exports = router;
