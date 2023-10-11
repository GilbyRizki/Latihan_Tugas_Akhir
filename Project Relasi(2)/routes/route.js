import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controller/projectController.js";
import ComputerController from "../controller/ComputerController.js";
import UserController from "../controller/userController.js";
import DepartementController from "../controller/departementController.js";

const Route = express.Router();

// Rute untuk mendapatkan semua komputer
Route.get("/computers", ComputerController.index);

// Rute untuk mendapatkan komputer berdasarkan ID
Route.get("/computers/:id", ComputerController.show);

// Rute untuk menambahkan komputer baru
Route.post("/computers", ComputerController.store);

// Rute untuk memperbarui komputer berdasarkan ID
Route.put("/computers/:id", ComputerController.update);

// Rute untuk menghapus komputer berdasarkan ID
Route.delete("/computers/:id", ComputerController.destroy);

// Rute untuk membuat proyek baru
Route.post("/projects", createProject);

// Rute untuk mendapatkan semua proyek
Route.get("/projects", getAllProjects);

// Rute untuk mendapatkan proyek berdasarkan ID
Route.get("/projects/:id", getProjectById);

// Rute untuk memperbarui proyek berdasarkan ID
Route.put("/projects/:id", updateProject);

// Rute untuk menghapus proyek berdasarkan ID
Route.delete("/projects/:id", deleteProject);

// Rute untuk mendapatkan semua pengguna
Route.get("/users", UserController.index);

// Rute untuk mendapatkan pengguna berdasarkan ID
Route.get("/users/:id", UserController.show);

// Rute untuk menambahkan pengguna baru
Route.post("/users", UserController.store);

// Rute untuk memperbarui pengguna berdasarkan ID
Route.put("/users/:id", UserController.update);

// Rute untuk menghapus pengguna berdasarkan ID
Route.delete("/users/:id", UserController.destroy);

// Rute untuk mendapatkan semua departemen
Route.get("/departments", DepartementController.index);

// Rute untuk mendapatkan departemen berdasarkan ID
Route.get("/departments/:id", DepartementController.show);

// Rute untuk menambahkan departemen baru
Route.post("/departments", DepartementController.store);

// Rute untuk memperbarui departemen berdasarkan ID
Route.put("/departments/:id", DepartementController.update);

// Rute untuk menghapus departemen berdasarkan ID
Route.delete("/departments/:id", DepartementController.destroy);

export default Route;
