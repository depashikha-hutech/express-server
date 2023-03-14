const db = require ("sequelize");


module.exports = (sequelize,Sequelize) =>{
 const Users = sequelize.define(
    "users",
    {
        id : {
            type :
             db.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        //defaultValue: db.DataTypes.UUID4,        
    },
    //name:{ 
        // type:db.DataTypes.STRING, 
      //set(value){ 
        // this.setDataValue('name',value+'hutech solution')},
    
     //get(){
       //  return this.getDataValue('name')+'1'
    // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
// },
//..............validation.....
name: {
    type: db.DataTypes.STRING,
    allowNull: false,
    validate:{
        notNull:{
            msg:"A name  is required"
        }, 
        notEmpty:{
            msg:"please provide name"
        },
    },
  },
  email: { type: db.DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
        notNull:{
            msg:"An email is required"
        },
        isEmail:{
            msg:"please  correct email format : user@gmail.com",
        }
    },

  },

    // email: { type: db.DataTypes.STRING,
    //     set(value){
    //         this.setDataValue('email',value+'@gmail.com')
    //     },
    //     allowNull: false, unique: true },
    phone:{ type: db.DataTypes.STRING, allowNull: false },
    password: {type:db.DataTypes.STRING,
    allowNull:false,
    isAlphanumeric:true,   
    validate:{
        isAlphanumeric:true,
        notNull:{
            msg:"A password is required",
        },
        notEmpty:{
            msg:"please provide a password",
        },     
        len:{
          args:[8],
          msg:"the password must be 8 character long"
        },
    },
    },
},


 { tabelName: "users" }
 );
 return Users;

    };
 
