import Project from "../models/Project";

class ProjectController {

  // get all users
  async index(req, res) {
    try {
      const projects = await Project.findAll();
      return res.json(projects);
    } catch (e) {
      return res.json(null);
    }
  }

}

export default new ProjectController();
