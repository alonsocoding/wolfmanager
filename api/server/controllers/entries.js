const Entry = require('../models').Entry;

module.exports = {
    create(req, res) {
        return Entry
            .create({
                title: req.body.title,
                note: req.body.note,
                category: req.body.category,
                project_name: req.body.project_name,
                amount: req.body.amount })
            .then((entry) => res.status(201).send(entry))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return Entry
            .all()
            .then(entries => res.status(200).send({ entries: entries }))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Entry
            .findById(req.params.entryId)
            .then((entry) => {
                if (!entry) {
                    return res.status(404).send({
                        message: 'Entry Not Found',
                    });
                }
                return res.status(200).send(entry);
            })
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return Entry
            .update({ 
                title: req.body.title,
                note: req.body.note,
                category: req.body.category,
                project_name: req.body.project_name,
                amount: req.body.amount },{
                where: { id: req.params.entryId }})
            .then((entry) => res.status(201).send(entry))
            .catch((error) => res.status(400).send(error));
    },
    countAll(req, res) {
        return Entry
        .findAndCountAll()
        .then((result) => res.status(201).send(result))
        .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Entry
            .findById(req.params.entryId)
            .then(entry => {
                if (!entry) {
                    return res.status(400).send({
                        message: 'Entry Not Found',
                    });
                }
                return entry
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
