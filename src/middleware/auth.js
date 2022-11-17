const { response } = require("./getDataHelpers");
const jwt = require("jsonwebtoken");
let key = process.env.JWT_KEY;
const jwt_decode = require("jwt-decode");

const roleUser = (req, res, next) => {
  const decoded = jwt_decode(req.headers.authorization);
  console.log(decoded);
  if (decoded.role == "toko") {
    return next();
  } else if (decoded.role == "admin") {
    return next();
  } else {
    return response(res, 404, false, null, "wrong role users");
  }
};

const role = (req, res, next) => {
  console.log(req.params.role, "role");
  if (req.params.role == "toko") {
    next();
  }
  return response(res, 404, false, null, "wrong role users");
};
function requireAdmin(req, res, next) {
  const decoded = jwt_decode(req.headers.authorization);
  console.log(decoded);
  if (decoded.role == "admin") {
    return next();
  } else {
    return response(res, 404, false, null, "wrong role users");
  }
}

const protect = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      let auth = req.headers.authorization;
      token = auth.split(" ")[1];
      let decode = jwt.verify(token, key);
      req.payload = decode;
      next();
    } else {
      return response(res, 404, false, null, "server need token");
    }
  } catch (err) {
    console.log(err);
    if (err && err.name == "JsonWebTokenError") {
      return response(res, 404, false, null, "invalid token");
    } else if (err && err.name == "TokenExpriredError") {
      return response(res, 404, false, null, "expired token");
    } else {
      return response(res, 404, false, null, "token not active");
    }
  }
};

module.exports = { requireAdmin, protect, roleUser };
