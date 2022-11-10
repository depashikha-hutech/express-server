let express = require("express");
let route = express.Router();
let db = require("../model/db");
const { getUser ,  addUser } = require("../utility/user");

//post 

route.post("/adduser", async(req,res) =>{
    try{
        const crtUser = await addUser (req.body);
        res.status(200).json(crtUser);
} catch (error){
        res.status(500).json({ sucess: false, message: "internal server error" });
    }

});
//get all users
 route.get("/", async (req, res) =>{
     try{
  const userInfo = await getUser();
  res.status(userInfo?.statusCode).json(userInfo);

 } catch (error) {
     res.status(500).json({ sucess: false, message: "internal server error"});
 }
 });
//get user by id:
 route.get("/:id",(req, res)=> {
     try {
         let user = await
          getUser(req?.parms?.id)
         res.status(200).json({
             sucess: true,
             message: "user found",
             users: user[0]
         });
     }catch (error) {
         res.status(500).json({ sucess: false, message: "internal server error"});
     }
 });
    module.exports = route;