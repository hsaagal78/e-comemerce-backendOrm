const express = require('express');
const routes = require('./routes');
// import sequelize connection
const category_routes = require('./api/category-routes');
const produc_routes = require('./api/prodruct-routes');
const tag_routes = require('./api/tag-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server. done
db.sync({force: false})
  .then(() => {});
  // Start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
