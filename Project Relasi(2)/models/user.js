import { Sequelize } from "sequelize";
import db from "../config/configdatabase.js";
import Computer from "./computer.js";
import Departement from "./departement.js";

const{DataTypes} = Sequelize;

const User = db.define('user', {
    nama:DataTypes.STRING,
    nik:DataTypes.STRING
},{
   freezeTableName:true
});

User.hasMany(Computer,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
});
Computer.belongsTo(User, {foreignKey:'user_id'});
Departement.hasMany(User, {foreignKey:'id'})

export default User;