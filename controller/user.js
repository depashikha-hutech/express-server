let express = require("express");
let route = express.Router();
let db = require("../model/db");
const {  addUser, getUser, updateUser, deleteUser} = require("../utility/user");

//post 

route.post("/adduser", async(req,res) =>{
    try{
        const crtUser = await addUser (req.body);
        res.status(200).json(crtUser);
} catch (error){
    console.log(error);
        res.status(500).json({ sucess: false, message: "internal server error" });
    }

});
//get all users
 route.get("/", async (req, res) =>{
     try{
  const userInfo = await getUser();
  res.status(200).json(userInfo);

 } catch (error) {
     res.status(500).json({ sucess: false, message: "internal server error"});
 }
 });
//get user by id:
 route.get("/:id", async (req, res)=> {
     try {
         let user = await  getUser(req?.params?.id);
         res.status(200).json({
             sucess: true,
             message: "user found",
             users: user[0]
         });
     }catch (error) {
         res.status(500).json({ sucess: false, message: "internal server error"});
     }
 });
 // update user by id
 route.put("/updateuser/:id", async (req, res) => {
 try{
    let userdisplay = await updateUser(req?.params?.id, req?.body)
    res.status(200).json({ userdisplay });
 }catch (error) {
    res.status(500).json({ sucess: false, message: "internal server error"});
 }
});
// delete by id
route.delete("/delete/:id", async (req, res) =>{
    try{
        console.log(req?.params?.id);
        let userdelete = await deletedUser(req?.params?.id)
        res.status(200).json({ userdelete});
        return userdelete;
    } catch (error){
    res.status(500).json({ sucess: false, message: "internal server error"});

    }
    
});
    module.exports = route;