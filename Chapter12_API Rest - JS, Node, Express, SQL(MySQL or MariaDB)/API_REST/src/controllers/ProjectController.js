import Project from "../models/Project";

class ProjectController {

  async store(req, res) {
    try {
      const newProject = await Project.create(req.body);
      return res.json(newProject);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const projects = await Project.findAll();
      return res.json(projects);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {

      const userId = req.id;

      const projects = await Project.findAll({ where: {userId} });

      if (!projects) {
        return res.status(400).json({
          errors: ['Project not found for this user']
        });
      }

      const projectDetails = projects.map(project => {
        const { id, projectName, url, description, categoryId, userId } = project;
        return { id, projectName, url, description, categoryId, userId };
    });

      return res.json(projectDetails);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await Project.findByPk(req.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user.']
        });
      }

      const updatedUser = await user.update(req.body);
      const { id, username, name, surname, email, photo} = updatedUser;

      return res.json({id, username, name, surname, email, photo});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await Project.findByPk(req.id);

      if(!user) return res.status(400).json({
        errors: ['Missing user']
      })

      const deletedUser = await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.json({
        errors: e.errors.map(err => err.message),
      });
    }

  }
}

export default new ProjectController();
