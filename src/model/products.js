const Pool = require("./../config/db");

// const selectData = (sortby, sort, page, limit) => {
const sort = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby);
  return Pool.query(
    `SELECT products.id,products.name,products.stock,products.price,category_name as category, products.photo FROM products JOIN category ON products.category_id = category.id WHERE (products.name) ILIKE ('%${search}%') 
    ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
  );
};

// ({ limit, offset, sort, sortby, search }) => {
//   // return Pool.query(`SELECT * FROM products ORDER BY id limit 5 offset ${(page - 1) * 5}`);
//   return Pool.query(
//     `SELECT products.id,name,stock,price,photo,category.category_name as category FROM products INNER JOIN category on products.category_id = category.id WHERE products.name ILIKE '${search}' ORDER BY ${sortby} ${sort} LIMIT ${limit} offset ${offset}
//     }`
//   );
// };

const selectData = () => {
  return Pool.query(
    `SELECT products.id,name,stock,price,photo,category.category_name as category_name FROM products INNER JOIN category on products.category_id = category.id`
  );
};
const insertData = (data) => {
  const { name, stock, price, category_id, photo } = data;
  console.log("data", data);
  return Pool.query(
    `INSERT INTO products(name,stock,price,category_id,photo) VALUES('${name}',${stock},${price},${category_id},'${photo}')`
  );
};

const updateData = (id, data) => {
  const { name, stock, price, category_id, photo } = data;
  return Pool.query(
    `UPDATE products SET name='${name}',stock='${stock}',price='${price}', category_id='${category_id}',photo='${photo}' WHERE id='${id}'`
  );
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM products where id='${id}'`);
};

const searchData = (id) => {
  return Pool.query(`select * from products WHERE id ='${id}'`);
};

// const searchName = (name) => {
//   return Pool.query(
//     `SELECT id,name,stock,price,category_id,photo FROM products WHERE name ILIKE '${name}%' ORDER BY id`
//   );
// };

// const sortData = sort => {
//     return Pool.query(`select * from products ORDER BY price DESC `)
// }

// const sort = (sortby, sort, page, limit) => {
//     return Pool.query(`SELECT * FROM products ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${(page - 1) * limit} `);
// }

module.exports = {
  selectData,
  insertData,
  deleteData,
  updateData,
  searchData,

  sort,
};
