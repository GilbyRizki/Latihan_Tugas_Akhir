import { Sequelize } from "sequelize";
import db from "../config/configdatabase.js";
import Departement from "./departement.js";
import project from "./project.js";

// const {DataTypes}=Sequelize;

const Deptproj = db.define('deptproj', {
},{
    freezeTableName:true
},{
    timestamps: false
});

Departement.belongsToMany(project, { through: Deptproj});
project.belongsToMany(Departement, { through: Deptproj});

export default Deptproj;
