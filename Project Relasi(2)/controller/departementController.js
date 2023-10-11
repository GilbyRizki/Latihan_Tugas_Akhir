import Departement from "../models/departement.js";

class DepartementController {
  static async index(req, res) {
    const data = await Departement.findAll();
    return res.json(data);
  }

  static async show(req, res) {
    try {
      const data = await Departement.findOne({
        where: { id: req.params.id },
      });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async store(req, res) {
    const data = await Departement.create(req.body);
    return res.json(data);
  }

  static async update(req, res) {
    try {
      await Departement.update(req.body, { where: { id: req.params.id } });
      return res.json({ success: true, message: "Update successful" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async destroy(req, res) {
    try {
      await Departement.destroy({ where: { id: req.params.id } });
      return res.json({
        success: true,
        message: "Departement deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default DepartementController;
