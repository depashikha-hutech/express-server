const { Users} = require("../model/db");
const db = require("../model/db");
const User = db.Users;
const users = require("../model/users");


async function createUserUtility(userDetails){
    try{
        const users = await db.Users.create(userDetails);
        if (users) {
            return({ sucess: true, statusCode:200, message: " user registered "});
         } else {
            return ({ sucess: true, statuscode:500, message: "failed to register user"});
         }
        } catch (error){
        return({ sucess:false, statusCode: 400, message:"user not found", error: error.message });
        }
    }
 async function loginUtility(email, password);
  try{
       const userExist = await db.Users.findOne({ where:{ email, password }})
       console.log(userExist);
       if (userExist) {
        return({ sucess: true, statusCode:200, message: "user sucessfully login" });
       }else {
        return({ sucess: false, statusCode:500, message: "loginfail" });
       }
    } catch (error) {
        return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});

    }
    

// async function getUserUtility(id = null){
//     try{
//         const users = await db.User.findAll({ where: id ?{id }: {}});
//         if (users.length == 0){
//         return ({ sucess: false, statusCode: 400, mesage:"user not found",});
//         }else {
//             return({ sucess: true, statusCode:200, message:"user found",user: id ? user[0] : user});
//         }
//     } catch (error){
//         return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});
//     }
//     }

//
async function addUser(users) {
    try{
        const usersInfo = await db.Users.create(users)
      return({ sucess:true, statusCode: 200, message:"user created sucessfully", user:{usersInfo}});
    } catch (error){
        console.log(error);
          return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});
    }   
}
//
 async function getUser(id = null) {
     try {
         const usersdetails = await db.Users.findAll({where: id ? { id } : {} });
         if (!usersdetails.length){
      return({ sucess:true, statusCode: 200, message:"user created sucessfully", user:{usersdetails}});
         }
    } catch (error) {
        return({ sucess:false, statusCode: 400, message:"user not found", error: error.message });
     }
     }
     async function updateUser(id, user){
       try {
        console.log(user);
        const userUpdated = await db.Users.update(user, {where:{id} });
       return({ sucess:true, statusCode: 200, message:"user updated sucessfully", user:{user}});
        return "12";
       }catch (error) {
        console.log (error);
        return({ sucess:false, statusCode: 400, message:"user not found", error: error.message });
       }
        } 
        // delete 
        async function deletedUser(id){
        try{
            const delUser =await db.Users.destroy({ where: { id}});
       return({ sucess:true, statusCode: 200, message:"user delted sucessfully" });      
        } catch (error) {
            return({ sucess:false, statusCode: 400, message:"user not found", error:error.message});
        }
        }     
module.exports = {addUser, getUser, updateUser, deletedUser, createUserUtility,loginUtility};