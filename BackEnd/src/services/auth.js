const db = require("../models");
const User = require("../models/user");
const bcrypt = require("bcrypt");
// const { v4 } = require("jsonwebtoken");
const { v4, uuidv4 } = require("uuid");

const   sign  = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

const registerService = ({ phone, password, email, name }) =>
  new Promise(async (resolve, reject) => {
    console.log(phone, password, email, name);
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone: phone,
          password: hashPassword(password),
          email: email,
          name: name,
          id: v4(),
        },
      });
      const token =
        response[1] &&
        sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIN: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token
          ? "register is  successfully"
          : "phone number has already been registered",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
  const loginService = ({ phone, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { phone },
            raw: true
        })
        const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
        const token = isCorrectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '2d' })
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully !' : response ? 'Password is wrong !' : 'Phone number not found !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})
module.exports = { registerService, loginService };
