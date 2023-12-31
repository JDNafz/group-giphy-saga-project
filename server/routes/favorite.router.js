const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

require("dotenv").config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

// return all favorite images
router.get('/', (req, res) => {
  let newFav = req.body; // like this: {url: "https;..fkfyasdfyaslfys..com/cats", title: "iamge descpritoon"}
  console.log(`getting newFav`, newFav);

  let queryText = ` SELECT * FROM favorite;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error getting favorites`, error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  let newFav = req.body; // like this: {url: "https;..fkfyasdfyaslfys..com/cats", title: "iamge descpritoon"}
  console.log(`Adding newFav`, newFav);

  let queryText = ` INSERT INTO favorite ("url","title")
                    VALUES ($1, $2);`;
  pool
    .query(queryText, [newFav.url, newFav.title])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new Fav`, error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
