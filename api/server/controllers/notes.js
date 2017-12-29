const Note = require('../models').Note;

module.exports = {
    create(req, res) {
        return Note
            .create({
                name: req.body.name,
                note: req.body.note,
                project: req.body.project })
            .then((note) => res.status(201).send(note))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return Note
            .all()
            .then(notes => res.status(200).send({ notes: notes }))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Note
            .findById(req.params.noteId)
            .then((file) => {
                if (!file) {
                    return res.status(404).send({
                        message: 'Note Not Found',
                    });
                }
                return res.status(200).send(note);
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Note
            .findById(req.params.noteId)
            .then(note => {
                if (!note) {
                    return res.status(400).send({
                        message: 'Note Not Found',
                    });
                }
                return note
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroyAll(req, res) {
        return Note.destroy({where: {}}).then(function () {});
    },
};
