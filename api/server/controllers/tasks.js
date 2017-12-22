const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Task
      .create({
        name: req.body.name,
        overview: req.body.overview,
        project_name: req.body.project_name,
        start_date: req.body.start_date,
        due_date: req.body.due_date,
        status: req.body.status,
        projectId: req.params.projectId })
      .then((task) => res.status(201).send(task))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Task
        .all()
        .then(tasks => res.status(200).send({tasks: tasks}))
        .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Task
      .find({
        where: {
          id: req.params.taskId,
          projectId: req.params.projectId,
        },
      })
      .then(task => {
        if (!task) {
          return res.status(404).send({
            message: 'Task Not Found',
          });
        }

        return task
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
