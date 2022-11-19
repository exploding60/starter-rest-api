require("dotenv").config();
const ModelProduct = require("./../model/products");
const { response } = require("./../middleware/getDataHelpers");
const client = require("../config/redis");
const cloudinary = require("../config/photo");

const productController = {
  update: async (req, res, next) => {
    const image = await cloudinary.uploader.upload(req.file.path, {
      folder: "toko",
    });
    // getting url for db
    req.body.photo = image.url;

    ModelProduct.updateData(req.params.id, req.body)
      .then((result) =>
        res.send({
          status: 200,
          message: `berhasil memasukan data`,
          data: result,
        })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  sort: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "name";
      const sort = req.query.sort || "ASC";
      const search = req.query.search || "";
      const result = await ModelProduct.sort({
        limit,
        offset,
        sort,
        sortby,
        search,
      });
      response(res, 200, true, result.rows, "get data success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "get data fail");
    }
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "delete data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
  sorting: (req, res, next) => {
    const sort = req.query.sort;
    const sortby = req.query.sortby;
    const page = req.query.page;
    const limit = req.query.limit;
    ModelProduct.sort(sortby, sort, page, limit)
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
  getProduct: (req, res, next) => {
    ModelProduct.selectData()
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },

  insert: async (req, res, next) => {
    try {
      req.body.stock = parseInt(req.body.stock);
      req.body.price = parseInt(req.body.price);
      req.body.category_id = parseInt(req.body.category_id);
      // for upload to folder on cloudinary

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });
      // getting url for db
      req.body.photo = image.url;
      await ModelProduct.insertData(req.body);
      return response(res, 200, true, req.body, "input data success");
    } catch (e) {
      return response(res, 404, false, e, "input data fail");
    }
  },
  //BUAT BARU
  // insert: (req, res, next) => {
  //   const Port = process.env.PORT;
  //   const photo = req.file.filename;
  //   const url = `http://localhost:${Port}/image/${photo}`;
  //   req.body.photo = url;
  //   req.body.stock = parseInt(req.body.stock);
  //   req.body.price = parseInt(req.body.price);
  //   ModelProduct.insertData(req.body)
  //     .then((result) =>
  //       res.send({ status: 200, message: `berhasil memasukan data progress` })
  //     )
  //     .catch((err) => res.send({ message: "error", err }));
  // },

  search: (req, res, next) => {
    ModelProduct.searchData(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },

  // searchName: (req, res, next) => {
  //   ModelProduct.searchName(req.params.name)
  //     .then((result) => {
  //       response(res, 200, true, result.rows, "get data success");
  //     })
  //     .catch((err) => res.send({ message: "error", err }));
  // },
  // sorting: (req, res, next) => {
  //   ModelProduct.sortData()
  //     .then((result) => res.send({ result: result.rows }))
  //     .catch((err) => res.send({ message: "error", err }));
  // },
};

exports.productController = productController;
