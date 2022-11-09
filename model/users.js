const db = require ("sequelize");


module.exports = (sequelize,Sequelize) =>{
 const Users = sequelize.define(
    "users",
    {
        id : {
            type : db.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
       // defaultValue: db.DataTypes.UUID4,        
    },
    name: db.DataTypes.STRING,
    email: { type: db.DataTypes.STRING, allowNull: false, unique: true },
    phone:{ type: db.DataTypes.STRING, allowNull: false },
    password: db.DataTypes.STRING,
},
 { tabelName: "users" }
 );
 return Users;

    };
 
