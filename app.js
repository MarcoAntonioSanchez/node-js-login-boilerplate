// DEPENDENCIES
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");

// ROUTES
const staticRoutes = require("./src/routes/static.routes.js");

// SETTINGS
dotenv.config();
const app = express();

app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// MIDDEWARES
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ROUTES
app.use(staticRoutes);

// START
app.listen(process.env.PORT);
console.log(`Server on port: ${process.env.PORT}`);
