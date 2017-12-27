const File = require('../models').File;

module.exports = {
    create(req, res) {
        return File
            .create({
                name: req.body.name,
                file: req.body.file,
                url: req.body.url,
                notes: req.body.notes,
                project: req.body.project,
                folder: req.body.folder })
            .then((file) => res.status(201).send(file))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return File
            .all()
            .then(files => res.status(200).send({ files: files }))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return File
            .findById(req.params.fileId)
            .then((file) => {
                if (!file) {
                    return res.status(404).send({
                        message: 'File Not Found',
                    });
                }
                return res.status(200).send(file);
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return File
            .findById(req.params.fileId)
            .then(file => {
                if (!file) {
                    return res.status(400).send({
                        message: 'File Not Found',
                    });
                }
                return file
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
