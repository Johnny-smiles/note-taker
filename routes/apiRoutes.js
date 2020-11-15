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



module.exports = router