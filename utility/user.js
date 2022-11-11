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

     //
     async function updateUser(id, user){
       try {
        console.log(user);
        const userUpdated = await db.Users.update(user, {where:{id} });
       //  console.log(updateUser);
         return user;
        return "12";
       }catch (error) {
        console.log (error);
        res.status(500).json({sucess:false,message:"internal server error", error: error.message });

       }

        }
        // delete 
        async function deleteUser(id){
        try{
            const delUser = await db.Users.destroy({ where: { id} });
            return delUser;
        } catch (error) {
            return ({ sucess: false, statusCode:500, message: "internal server error", error: error.message});
        }
        }

     
module.exports = {addUser, getUser, updateUser, deleteUser };