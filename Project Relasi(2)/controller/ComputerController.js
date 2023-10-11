import Computer from "../models/computer.js";
import User from "../models/user.js";

class ComputerController {
  static async index(req, res) {
    const data = await Computer.findAll();
    return res.json(data);
  }

  static async show(req, res) {
    try {
      const data = await Computer.findOne({
        where: { id: req.params.id },
        include: User,
      });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async store(req, res) {
   const data = await Computer.create(req.body)
   return res.json(data);
  }

  static async update(req, res) {
    try {
      await Computer.update(req.body, { where: { id: req.params.id } });
      return res.json({ success: true, message: "Update successful" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async destroy(req, res) {
    try {
      await Computer.destroy({ where: { id: req.params.id } });
      return res.json({
        success: true,
        message: "Computer deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default ComputerController;
