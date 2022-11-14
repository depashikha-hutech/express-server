let express = require("express");
let route = express.Router();
let db = require("../model/db");
const {  addUser, getUser, updateUser, deletedUser, createUserUtility,loginUtility} = require("../utility/user");
const { authorizeUser } = require("../utility/auth");
const router =Router();
//signup
router.post("/signup", async (req,res) =>{
    try{
        console.log("user signup..");
        let response = await createUserUtility (req.body);
        res.status(response?.statusCode).json(response);
    } catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
    }

});
// loginin
router.post("/login", async (req, res) =>{
    try{
        console.log("user login");
        const userExist = await loginUtility(req.email,  req.password); 
      //  if (userExist?.id){
        res.status(userExist?.statusCode).json(userExist)
   // } else{
   //     res.status(userExist?.statusCode).json(usernotExist)
    } catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error:error.message });
    }
  
});

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
  res.status(userInfo?.statusCode).json(userInfo)
 } catch (error) {
     res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
 }
 });
//get user by id:
 route.get("/:id", async (req, res)=> {
     try {
         let userdetail = await  getUser(req?.params?.id);
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
    module.exports = route;