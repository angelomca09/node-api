const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = (app) => {
  // Applying CORS
  app.use(cors());
  // application/json
  app.use(bodyParser.json());
  // application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
};
