const validateStock = (req, res, next) => {
  const { name, stock, price } = req.body;
  let err = []; //penampung error
  try {
    if (!name || !isNaN(name) || name.length <= 3)
      err.push("name must more than 3 characters");
    if (!stock || isNaN(stock) || 0)
      err.push("stock must be a number and not 0");
    if (!price || isNaN(stock) || 0)
      err.push("price must be a number and not 0");
    if (err.length > 0) {
      throw new Error(err.toString());
    }
    next();
  } catch (err) {
    console.log(err);
    // res.send(`${err}`)
    res.json({ error: `${err}` }); // buat nampung banyak error makanya dijadiin json
  }
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  let err = []; //penampung error
  try {
    if (!name || !isNaN(name) || name.length <= 3)
      err.push("name must more than 3 characters");
    if (err.length > 0) {
      throw new Error(err.toString());
    }
    next();
  } catch (err) {
    console.log(err);
    // res.send(`${err}`)
    res.json({ error: `${err}` }); // buat nampung banyak error makanya dijadiin json
  }
};

module.exports = { validateStock, validateCategory };
