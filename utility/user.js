const { Users} = require("../model/db");
const db = require("../model/db");
const users = require("../model/users");

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
         console.log("hhh",usersdetails);
         //if (!usersdetails.length){
      return({ sucess:true, statusCode: 200, message:"user created sucessfully", user:{usersdetails}});
       //  }
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
        
        // getter setter
//  async function getteruser() {
//      try {
//          const person = await db.Users.create({name:'depashikha' });
//  console.log("iii", person);
         
//          {
//       return({ sucess:true, statusCode: 200, message:"user created sucessfully",user:{ person}});
//          }
//     } catch (error) {
//         return({ sucess:false, statusCode: 400, message:"user not found", error: error.message });
//      }
//      }

module.exports = {addUser, getUser, updateUser, deletedUser };