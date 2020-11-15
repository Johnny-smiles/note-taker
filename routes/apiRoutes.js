// node module path
const { Router } = require("express");
const path = require("path");
// init router
const router = require("express").Router();
// liking database
let dataBase = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(dataBase)
}) ;

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
      
  });


module.exports = router