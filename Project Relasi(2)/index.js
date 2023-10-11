// ini import dari package yg telah di install 
import Express from "express";
import fileUpload from "express-fileupload";

// ini import dari folder config
import db from "./config/configdatabase.js";

// ini import dari model
import User from "./models/user.js";
import Computer from "./models/computer.js";
import Departement from "./models/departement.js"
import Project from "./models/project.js";
import Deptproj from "./models/deptproj.js";
import Route from "./routes/route.js";

// membuat variabel yg berisi fungsi express untuk membuat aplikasi express
const app = Express();

// ini untuk menggunakan func fileupload yg telah di import sebelum nya 
app.use(fileUpload())

try{
    await db.authenticate();
    console.log("database terhubung!!");
    Computer.sync();
    User.sync();
    Departement.sync();
    Project.sync();
    Deptproj.sync();
}catch(error){
    console.error(error);
}

app.listen(5000, ()=>console.log("server ngapung dan berjalan"));


app.use(Route);