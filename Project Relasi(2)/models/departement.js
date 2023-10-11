import { Sequelize } from "sequelize";
import db from "../config/configdatabase.js";
import Project from "./project.js";

const {DataTypes}=Sequelize;

const Departement=db.define('departement',{
    departement_head:DataTypes.STRING,
    departement_description:DataTypes.STRING
},{
    freezeTableNAME:true
});




export default Departement;
