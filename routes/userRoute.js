const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(200)
        .send({ message: "El usuario ya existe", success: false });
    }
    const password = req.body.password;
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .send({ message: "Usuario creado correctamente", success: true });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .send({ message: "Error al crear usuario", success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "El usuario no existe", success: false });
    }
    const isMatch = await bycrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Password incorrecto", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login correcto", success: true, data: token });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Error al iniciar sesion", success: false, error });
  }
});
module.exports = router;
