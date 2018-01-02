const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return User
            .all()
            .then(users => res.status(200).send({ users: users }))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return User
            .findById(req.params.userId)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return User
            .update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }, {
                where: { id: req.params.userId }
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    },
    countAll(req, res) {
        return User
        .findAndCountAll()
        .then((result) => res.status(201).send(result))
        .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
