const UserModel = require("../models/user.model");
const sendVerifyEmail = require("../helpers/sendMail.js");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../helpers/generateAccessToken.js");



const user_controller = {
  getAll: async (req, res) => {
    const users = await UserModel.find();

    if (users.length > 0) {
      res.status(200).send({
        message: "success",
        data: users,
      });
    } else {
      res.send({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let user;
    try {
      user = await UserModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (user) {
      res.status(200).send({
        message: "success",
        data: user,
      });
    } else {
      res.send({
        message: "no content",
        data: null,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await UserModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error,
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const response = await UserModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  register: async (req, res) => {
    try {
      const { username, email } = req.body;
      const duplicateUserName = await UserModel.find({ username: username });
      const duplicateEmail = await UserModel.find({ email: email });
      let message = "";
      if (duplicateUserName.length > 0) {
        message = "username already exists";
      }
      if (duplicateEmail.length > 0) {
        message = "email already exists";
      }
      if (message.length > 0) {
        res.send({
          error: true,
          message: message,
        });
      } else {
        let newUser = { ...req.body };
        let saltRounds = 10;

        bcrypt
          .genSalt(saltRounds)
          .then((salt) => bcrypt.hash(req.body.password, salt))
          .then(async (hash) => {
            newUser.password = hash;
            const user = new UserModel(newUser);
            //JWT TOKEN
            const token = jwt.sign(
              { email: newUser.email},
              process.env.PRIVATE_KEY,
              { expiresIn: "1d" }
            );
            sendVerifyEmail(newUser.email, token);
            await user.save();
            res.send({
              message: "posted",
              error: false,
              data: user,
            });
          });
      }
    } catch (error) {
      res.status(500).send({
        message: error,
        error: true,
      });
    }
  },
  user_login: async (req, res) => {
    const user = await UserModel.findOne({
      email: req.body.email,
      role: "client",
    });
    if (user) {
      bcrypt.compare(
        req.body.password,
        user.password,
        function (err, response) {
          if (response) {
            if (user.isVerified == true) {
              const token = generateAccessToken(user);
              res.send({
                message: "signed in successfully",
                auth: true,
                user: user,
                token: token,
              });
            } else {
              res.send({
                message: "verify your email",
                auth: false,
              });
            }
          } else {
            res.send({
              message: "email or password is incorrect",
              auth: false,
            });
          }
        }
      );
    } else {
      res.send({
        message: "no such user",
        auth: false,
      });
    }
  },
  verify: async (req, res) => {
    const{token} = req.params;
    const validToken = jwt.verify(token, process.env.PRIVATE_KEY);
    if(validToken){
      const{email} = validToken;
      const user = await UserModel.findOne({email:email});
      if(user){
        await UserModel.findByIdAndUpdate(user._id,{isVerified: true});
        res.redirect('http://localhost:5173/login');
        return;
      }
      else{
        res.send({
          message:'no such user'
        })
      }
    }
    else{
      res.send({
        message:'invalid token',
        auth: false
      })
    }
    res.send({message:'hey'})
  },
};

module.exports = user_controller;
