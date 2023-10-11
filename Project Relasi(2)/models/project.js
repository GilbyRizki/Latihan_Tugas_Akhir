import { Sequelize } from "sequelize";
import db from "../config/configdatabase.js";
// import Departement from "./departement.js";

const {DataTypes} = Sequelize;

const Project = db.define('project',{
    project_head : DataTypes.STRING,
    project_name : DataTypes.STRING,
    project_description : DataTypes.STRING
},{
    freezeTableName : true
});

export default Project;