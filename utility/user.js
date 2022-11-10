const { Users} = require("../model/db");
const db = require("../model/db");
const users = require("../model/users");

async function addUser(users) {
    try{
        const usersInfo = await db.Users.create(users)
        console.log(usersInfo);
        return usersInfo.get();
    } catch (error){
        console.log(error);
          return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});
    }
    
}
//
 async function getUser(id = null) {
     try {
         const users = await db.Users.findAll({where: id ? { id } : {} });
         return users;
    } catch (error) {
         res.status(500).json({sucess:false,message:"internal server error"});
     }
     }
module.exports = { getUser,  addUser };