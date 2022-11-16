const db = require("../model/db");
const users = require("../model/users");
const jwt = require("jsonwebtoken")


async function createJWTToken(id, email) {
    //get the matched user details
    //create JWT token which includes onfo
     
    const token = jwt.sign({user:{ id, email}} , process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    console.log(token);
    return { idToken: token, refreshToken: "na" };
  }
  
  async function authorizeUser(req, res, next) {
    console.log("Authorizing user permission.....");
    //next();
     const authHeader = req.headers["authorization"];
     //console.log(authHeader);
     const tokeninfo = authHeader ? authHeader.split(" ")[1]: null
     console.log({tokeninfo});
    if (tokeninfo == null) res.send(401);
     jwt.verify(tokeninfo, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       if (err) { 
        res.send(401);
       } else {
       console.log(user);
       req.user = user;
       next();
       }
     });

    }
  module.exports = { createJWTToken, authorizeUser };
  