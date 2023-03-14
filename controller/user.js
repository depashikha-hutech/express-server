let express = require("express");
let route = express.Router();
let db = require("../model/db");
const {  addUser, getUser, updateUser, deletedUser} = require("../utility/user");

//post 

route.post("/adduser", async(req,res) =>{
    try{
        const crtUser = await addUser (req.body);
      res.status(crtUser?.statusCode).json(crtUser)
} catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error:error.message });
    }
});
//get all users
 route.get("/", async (req, res) =>{
     try{
  const userInfo = await getUser();
  console.log("jjj",userInfo);
  res.status(userInfo?.statusCode).json(userInfo)

 } catch (error) {
     res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
 }
 });
//get user by id:
 route.get("/:id", async (req, res)=> {
     try {
         let userdetail = await  getUser(req?.params?.id);
         console.log("kkk",userdetail);
         res.status(userdetail?.statusCode).json(userdetail)
     }catch (error) {
         res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
     }
 });
 // update user by id
 route.put("/updateuser/:id", async (req, res) => {
 try{
    let userdisplay = await updateUser(req?.params?.id, req?.body)
    res.status(userdisplay?.statusCode).json(userdisplay)
 }catch (error) {
    res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
 }
});
// delete by id
route.delete("/delete/:id", async (req, res) =>{
    try{    
   let userdelete = await deletedUser(req?.params?.id)
        res.status(userdelete?.statusCode).json(userdelete)
    } catch (error){
    res.status(500).json({ sucess: false, message: "internal server error" , error: error.message});
    }
});

// route.get("/get", async (req, res) =>{
//     try{
//  const data = await getteruser();
//  console.log("llll");
//  console.log({data});
//  res.status(data?.statusCode).json(data)

// } catch (error) {
//     res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
// }
// });

    module.exports = route;