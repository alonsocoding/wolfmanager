const TeamMember = require('../models').TeamMember;

module.exports = {
  create(req, res) {
    return TeamMember
      .create({
        username: req.body.username,
        project_name: req.body.project_name,
        role: req.body.role })
      .then((teammember) => res.status(201).send(teammember))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return TeamMember
        .all()
        .then(teammembers => res.status(200).send({teammembers: teammembers}))
        .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return TeamMember
      .findById(req.params.teammemberId)
      .then((teammember) => {
        if (!teammember) {
          return res.status(404).send({
            message: 'Team Member Not Found',
          });
        }
        return res.status(200).send(teammember);
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return TeamMember
      .findById(req.params.teammemberId)
      .then(teammember => {
        if (!teammember) {
          return res.status(400).send({
            message: 'Team Member Not Found',
          });
        }
        return teammember
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
