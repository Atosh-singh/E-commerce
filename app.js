const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const errorController = require("./controllers/error.js");

const app = express();

app.set("view engine", "ejs");
//app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
//const exp = require("constants");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
