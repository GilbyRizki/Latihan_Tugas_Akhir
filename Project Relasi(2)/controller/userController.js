import Computer from "../models/computer.js";
import User from "../models/user.js";

class UserController {
  static async index(req, res) {
    const data = await User.findAll();
    return res.json(data);
  }

  static async show(req, res) {
    try {
      const data = await User.findOne({
        where: { id: req.params.id },
        include: Computer,
      });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async store(req, res) {
    const data = await User.create(req.body);
    return res.json(data);
  }

  static async update(req, res) {
    try {
      await User.update(req.body, { where: { id: req.params.id } });
      return res.json({ success: true, message: "Update successful" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async destroy(req, res) {
    try {
      await User.destroy({ where: { id: req.params.id } });
      return res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
