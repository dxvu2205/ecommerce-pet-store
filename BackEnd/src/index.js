const express = require("express");
const app = express();
const port = 3001;
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const connectdb = require("./config/db") ;
const cors =require ('cors');



connectdb();

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["POST", 'GET', 'PUT', "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views/"));
//

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
