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

function createNewNote(body, noteArray) {
  const note = body;
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ note: noteArray }, null, 2)
  );
  return note;
}

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, note);
    res.json(note);
  });


module.exports = router