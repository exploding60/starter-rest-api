const { response } = require("../middleware/getDataHelpers");
const { create, findEmail, checkVerification } = require("../model/users");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { generateToken } = require("../helpers/auth");
require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
const UsersController = {
  insert: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    console.log("role", req.params.role);
    let role = req.params.role;

    if (users) {
      return response(res, 404, false, "email already use", " register fail");
    }

    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      fullname: req.body.fullname,
      role: req.body.role,
    };
    try {
      const result = await create(data);
      if (result) {
        let payload = {
          email: data.email,
          role: data.role,
        };
        console.log(payload, "payload");
        let token = generateToken(payload);
        let mailOptions = {
          from: "rizkyganteng",
          to: data.email,
          subject: "Nodemailer Project",
          text: `"Hi! This is your token <b>'${token}'</b>"`,
        };
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email Sent");
            n;
          }
        });
        console.log(result);
        response(
          res,
          200,
          true,
          true,
          "register success - check email to get token"
        );
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, " register fail");
    }
  },
  login: async (req, res, next) => {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, " email not found");
    }
    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, "wrong password");
    }
    delete users.password;
    let payload = {
      email: users.email,
      role: users.role,
    };
    users.token = generateToken(payload);
    response(res, 200, false, users, "login success");
  },
};

exports.UsersController = UsersController;
