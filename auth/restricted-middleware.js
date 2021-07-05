const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { jwtSecret: secret } = require("../api/secrets")

const Users = require("../users/users-model.js")

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Credentials" })
      } else {
        next()
      }
    })
  } else {
    res.status(401).json({ message: "No credentials provided" })
  }
}
