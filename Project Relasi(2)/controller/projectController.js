import Departement from "../models/departement.js";
import Project from "../models/project.js";

const createProject = async (req, res) => {
  try {
    const { project_head, project_name, project_description } = req.body;
    const newProject = await Project.create({
      project_head,
      project_name,
      project_description,
    });
    if (req.body.departemens_id) {
      const departemens = await Departement.findOne({where:{id:req.body.departemens_id}})
      await newProject.addDepartement(departemens)
    }
    res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fungsi untuk mendapatkan semua proyek
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fungsi untuk mendapatkan proyek berdasarkan ID
const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fungsi untuk memperbarui proyek berdasarkan ID
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { project_head, project_name, project_description } = req.body;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    await project.update({
      project_head,
      project_name,
      project_description,
    });
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fungsi untuk menghapus proyek berdasarkan ID
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    await project.destroy();
    res
      .status(200)
      .json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
