const ProjectCategory = require('../models').ProjectCategory;

module.exports = {
  create(req, res) {
    return ProjectCategory
      .create({
        name: req.body.name,
        color: req.body.color
      })
      .then((projectcategory) => res.status(201).send(projectcategory))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return ProjectCategory
      .all()
      .then(projectcategories => res.status(200).send({ projectcategories: projectcategories }))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return ProjectCategory
      .findById(req.params.projectcategoryId)
      .then((project) => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Category Not Found',
          });
        }
        return res.status(200).send(projectcategory);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return ProjectCategory
      .update({
        name: req.body.name,
        color: req.body.color
      }, {
        where: { id: req.params.projectcategoryId }
      })
      .then((projectcategory) => res.status(201).send(projectcategory))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return ProjectCategory
      .findById(req.params.projectcategoryId)
      .then(projectcategory => {
        if (!projectcategory) {
          return res.status(400).send({
            message: 'Project Category Not Found',
          });
        }
        return projectcategory
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
