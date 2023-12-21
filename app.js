// DEPENDENCIES
const express = require("express");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
// const dotenv = require("dotenv");

// ROUTES
const staticRoutes = require("./src/routes/static.routes.js");

// SETTINGS
// dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// MIDDEWARES
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: "mi-secreto",
    resave: false,
    saveUninitialized: false,
  })
);

// ROUTES
app.use(staticRoutes);

// START
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
