const checkInsertCT = (req, res, next) => {
  const { name } = req.body;
  try {
    if (name === "") throw new Error("nama tidak boleh kosong");
  } catch (err) {
    return res.send(`${err}`);
  }
  next();
};

const checkUpdateCT = (req, res, next) => {
  const { name } = req.body;
  try {
    if (name === "") throw new Error("nama tidak boleh kosong atau integer");
  } catch (err) {
    return res.send(`${err}`);
  }
  next();
};

module.exports = { checkInsertCT, checkUpdateCT };
