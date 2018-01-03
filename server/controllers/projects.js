const Project = require('../models').Project;
const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Project
      .create({
        name: req.body.name,
        icon: req.body.icon,
        description: req.body.description,
        progress: req.body.progress,
        category: req.body.category
      })
      .then((project) => res.status(201).send(project))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Project
      .all()
      .then(projects => res.status(200).send({ projects: projects }))
      .catch(error => res.status(400).send(error));
  },
  list_tasks(req, res) {
    return Project
      .findAll({
        include: [{
          model: Task,
          as: 'tasks',
        }],
      })
      .then(projects => res.status(200).send(projects))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Project
      .findById(req.params.projectId, {
        include: [{
          model: Task,
          as: 'tasks',
        }],
      })
      .then((project) => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return res.status(200).send(project);
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Project
      .findById(req.params.projectId)
      .then(project => {
        if (!project) {
          return res.status(400).send({
            message: 'Project Not Found',
          });
        }
        return project
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Project
      .update({
        name: req.body.name,
        icon: req.body.icon,
        description: req.body.description,
        progress: req.body.progress,
        category: req.body.category
      }, {
        where: { id: req.params.projectId }
      })
      .then((project) => res.status(201).send(project))
      .catch((error) => res.status(400).send(error));
  },
  countAll(req, res) {
      return Project
      .findAndCountAll()
      .then((result) => res.status(201).send(result))
      .catch((error) => res.status(400).send(error));
  },
  destroyAll(req, res) {
    return Project
      .all()
      .then(project => {
        if (!project) {
          return res.status(400).send({
            message: 'Project Not Found',
          });
        }
        return project
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
