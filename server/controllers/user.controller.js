const User = require("../models/user");

const userCtrl = {};

const jwt = require("jsonwebtoken");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.crearUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();

  const token = jwt.sign({ _id: user._id }, "secretKey");
  res.status(200).json({ token });
};

userCtrl.getUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("El email no existe");
  } else {
    if (user.admin == true) {
    return res.json({ status: "admin" });
    }
  }
  if (user.password !== password) {
    return res.status(401).send("Contrasena erronea");
  }

  const token = jwt.sign({ _id: user._id,admin: user.admin }, "secretKey");
  res.status(200).json({ token });
};

userCtrl.editarUser = async (req, res) => {
  const { id } = req.params;
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  await User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true });
  res.json({ status: "User actualizado" });
};

userCtrl.eliminarUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "User eliminado" });
};

userCtrl.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Solicitud no permitda");
  }
  const token = req.headers.authorization.split(" ")[1];
  if (token === null) {
    return res.status(401).send("Solicitud no permitda");
  }

  const payload = jwt.verify("secretKey");
  console.log(payload);
};

module.exports = userCtrl;
