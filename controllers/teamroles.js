const TeamRole = require('../models').TeamRole;

module.exports = {
  create(req, res) {
    return TeamRole
      .create({
        name: req.body.name,
        project: req.body.project,
        task: req.body.task,
        team: req.body.team,
        time: req.body.time,
        file: req.body.file,
        calendar: req.body.calendar,
        finance: req.body.finance,
        notes: req.body.notes,
        reports: req.body.reports,
        client: req.body.client,
        map: req.body.map })
      .then((teamrole) => res.status(201).send(teamrole))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return TeamRole
        .all()
        .then(teamroles => res.status(200).send({teamroles: teamroles}))
        .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return TeamRole
      .findById(req.params.teamroleId)
      .then((teamrole) => {
        if (!teamrole) {
          return res.status(404).send({
            message: 'Team Role Not Found',
          });
        }
        return res.status(200).send(teamrole);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return TeamRole
      .update({
        name: req.body.name,
        project: req.body.project,
        task: req.body.task,
        team: req.body.team,
        time: req.body.time,
        file: req.body.file,
        calendar: req.body.calendar,
        finance: req.body.finance,
        notes: req.body.notes,
        reports: req.body.reports,
        client: req.body.client,
        map: req.body.map
      }, {
        where: { id: req.params.teamroleId }
      })
      .then((teamrole) => res.status(201).send(teamrole))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return TeamRole
      .findById(req.params.teamroleId)
      .then(teamrole => {
        if (!teamrole) {
          return res.status(400).send({
            message: 'Team Role Not Found',
          });
        }
        return teamrole
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
