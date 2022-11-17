const checkInsertPR = (req, res, next) => {
  const { name, stock, price, category_id, category_name } = req.body;
  try {
    if (name === "") throw new Error("nama tidak boleh kosong atau integer");
    if (category_id === 0)
      throw new Error("category tidak boleh kosong atau berbentuk string");
    if (stock === 0)
      throw new Error("stock tidak boleh kosong atau berbentuk string");
    if (price === 0) throw new Error("price tidak boleh kosong");
    if (category_name === 0) throw new Error("category tidak boleh kosong");
  } catch (err) {
    return res.status(404).json({ message: err.message, status: 404 }); //baru diubah 25/09/2022
  }
  next();
};

const checkUpdatePR = (req, res, next) => {
  const { name, stock, price, category_id, category_name } = req.body;
  try {
    if (name === "") throw new Error("nama tidak boleh kosong atau integer");
    if (category_id === 0)
      throw new Error("category tidak boleh kosong atau berbentuk string");
    if (stock === 0) throw new Error("stock tidak boleh berbentuk string");
    if (price === 0) throw new Error("price tidak boleh kosong");
    if (category_name === 0) throw new Error("category tidak boleh kosong");
  } catch (err) {
    return res.status(404).json({ message: err.message, status: 404 });
  }
  next();
};

module.exports = { checkInsertPR, checkUpdatePR };
