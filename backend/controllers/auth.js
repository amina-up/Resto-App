const Users = require("../schema/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

require('cookie-parser')()
module.exports = {

  signUp: async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      return res.status(404).send({ msg: "cet email existe" });
    }
    user = new Users(
      _.pick(req.body, [
        "username",
        "password",
        "email",
        "role"
       
      ])
    );
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();

    let token = user.generateAuthToken();
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 900000000),
        httpOnly: true,
      })

      .send(
        _.pick(user, ["username", "email","role"])
      );
  },


  
  signIn: async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("email ou password sont incorrects");
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).send("email ou password sont incorrects");
    }
    try {
      console.log(user);
      let token = user.generateAuthToken();
      res
        .cookie("token", token, {
          expires: new Date(Date.now() + 900000000),
          httpOnly: true,
        })

        .send(
          _.pick(user, [
            "username",
            "email",
            "role"
         
          ])
        );
    } catch (err) {
      console.log(err);
    }

    
  },

  logOut: (req, res) => {
    res.clearCookie("token").send("ok");
  },
  getprofil: async (req, res) => {
    const token = req.cookies.token; // ijib token fil header mta3 req
    if (!token) return res.send("error");
    try {
      let decodeToken = jwt.verify(token, "privateKey"); //décodage de token par privatekey
      req.user = decodeToken;

      const user = await Users.findOne({ _id: req.user._id }).select(
        "-password"
      ); //vérification(ilawij 3al user :identification)
      res.send(user); // ijib user
    } catch (e) {
      res.send("token wrong ");
    }
  },
}