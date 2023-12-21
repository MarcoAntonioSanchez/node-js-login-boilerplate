const { User } = require("../models/users.js");

exports.loadHome = (req, res) => {
  res.render("home");
};

exports.loginIntent = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password) {
      return res.render("/?error=Usuario o contraseña incorrectos");
    }

    req.session.userId = user.id;
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    res.redirect("/?error=Error al iniciar sesión");
  }
  res.render("home");
};
