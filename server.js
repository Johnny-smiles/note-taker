// linking express
const express = require('express');
// linking routing file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//init app
const app = express();
// init port
const PORT = process.env.PORT || 8080;
// parse incoming JSON data
app.use(express.json());
// parse ("formatting") incoming string or array data
app.use(express.urlencoded({ extended: true}));
// using public folder content
app.use(express.static('public'));
// using router from express
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
// activating server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });