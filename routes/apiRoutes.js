// node module path
// init router
const router = require("express").Router();
// unique id package
const uuidv1 = require("uuidv1");
// linking fs to write files
const fs = require('fs');
// linking util for filesystem write fuction
const util = require('util');
// liking database
let dataBase = require('../db/db.json');
// linking util and file system to uses promises
const writeFilAsync = util.promisify(fs.writeFile);

router.get('/notes', (req, res) => {
    res.json(dataBase)
}) ;

router.post('/notes', (req, res) => {
  // assigning request
  let note = req.body;
  // generating key
  let id = uuidv1();
  // attaching it to note
  note.id = id;
  // pushing new note to database
  dataBase.push(note);
  // writing file to database
  writeFilAsync('db/db.json', JSON.stringify(dataBase)).then(()=> {
    res.json(note);
  }).catch(err =>{
    console.log(err)
  })

  });


module.exports = router