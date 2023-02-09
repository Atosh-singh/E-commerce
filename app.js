const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const exp = require("constants");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found!" });
});
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
