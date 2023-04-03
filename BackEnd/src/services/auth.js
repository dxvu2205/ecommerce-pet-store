const db = require("../models");
const User = require("../models/user");
const bcrypt = require("bcrypt");
// const { v4 } = require("jsonwebtoken");
const { v4, uuidv4 } = require("uuid");

const sign = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

const registerService = ({ phone, password, email, name }) =>
  new Promise(async (resolve, reject) => {
    console.log(phone, password, email, name);
    try {
      const response = await db.User.create({
        phone: phone,
        password: hashPassword(password),
        email: email,
        name: name,
        id: v4(),
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      });
      const isCorrectPassword =
        response && bcrypt.compareSync(password, response.password);

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
module.exports = { registerService, loginService };
