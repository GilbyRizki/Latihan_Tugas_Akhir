import { Sequelize } from "sequelize";
import db from "../config/configdatabase.js";

const {DataTypes} = Sequelize;
const Computer = db.define('computer', {
    nama_computer:DataTypes.STRING
},{
    freezeTableName:true
});

export default Computer;
