const FinanceCategory = require('../models').FinanceCategory;

module.exports = {
  create(req, res) {
    return FinanceCategory
      .create({
        name: req.body.name,
        description: req.body.description })
      .then((financecategory) => res.status(201).send(financecategory))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return FinanceCategory
        .all()
        .then(financecategories => res.status(200).send({financecategories: financecategories}))
        .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return FinanceCategory
      .findById(req.params.financecategoryId)
      .then((financecategory) => {
        if (!financecategory) {
          return res.status(404).send({
            message: 'Finance Category Not Found',
          });
        }
        return res.status(200).send(financecategory);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return FinanceCategory
        .update({ 
          name: req.body.name,
          description: req.body.description },{
            where: { id: req.params.financecategoryId }})
        .then((financecategory) => res.status(201).send(financecategory))
        .catch((error) => res.status(400).send(error));
},
  destroy(req, res) {
    return FinanceCategory
      .findById(req.params.financecategoryId)
      .then(financecategory => {
        if (!financecategory) {
          return res.status(400).send({
            message: 'Finance Category Not Found',
          });
        }
        return financecategory
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
