import Project from "../models/Project";


class Project {
  async index(req, res) {
    const project = await Project.findAll();

    if(!project){
      return res.status(401).json({
        errors: ['Users not found'];
      })
    }

    return res.json(project);
  }
}

export default new Project();
