const ModelCategory = require("./../model/category");

const categoryController = {
  update: (req, res, next) => {
    ModelCategory.updateData(req.params.id, req.body)
      .then((result) =>
        res.send({
          status: 200,
          message: `berhasil memasukan data`,
          data: result,
        })
      )
      .catch((err) => res.send({ message: "error", err }));
  },

  delete: (req, res, next) => {
    ModelCategory.deleteData(req.params.id)
      .then((result) =>
        res.send({ status: 200, message: `berhasil menghapus data` })
      )
      .catch((err) => res.send({ message: "error", err }));
  },

  getCategory: (req, res, next) => {
    const page = req.query.page;
    ModelCategory.selectData(page)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
  },

  insert: (req, res, next) => {
    ModelCategory.insertData(req.body)
      .then((result) =>
        res.send({ status: 200, message: `berhasil memasukan data` })
      )
      .catch((err) => res.send({ message: "error", err }));
  },

  search: (req, res, next) => {
    ModelCategory.searchData(req.params.id)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
  },
  searchName: (req, res, next) => {
    ModelCategory.searchName(req.params.name)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
  },
};

exports.categoryController = categoryController;
