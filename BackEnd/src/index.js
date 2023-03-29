const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const con = require('./config/db')

const morgan = require("morgan");

con.connect();


app.use(morgan("combined"));
//
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views/"));
//

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
