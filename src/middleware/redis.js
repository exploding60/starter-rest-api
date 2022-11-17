const client = require("../config/redis");
const { response } = require("./getDataHelpers");

const hitCache = async (req, res, next) => {
  const id = req.params.id;
  const product = await client.get(`products/${id}`);
  console.log(product);
  if (product) {
    console.log("aw");
    return response(res, 200, true, JSON.parse(product), "get product success");
  }
  next();
};

const clearCache = async (req, res, next) => {
  const id = req.params.id;
  client.del(`products/searchID=${id}`);
  next();
};

module.exports = { hitCache, clearCache };
