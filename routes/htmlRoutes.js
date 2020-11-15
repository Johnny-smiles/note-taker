// node module path
const path = require("path");
// init router
const router = require("express").Router();
// display main page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// display notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
// export router
module.exports = router;