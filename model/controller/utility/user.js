const db = require("../model/db");

async function getUser(id = null) {
    try {
        const users = await db.Users.findAll({where: id ? { id } : {} });
        return users;
    } catch (error) {
        res.status(500).json({sucess:false,message:"internal server error"});
    }
    }
module.exports = {getUser };