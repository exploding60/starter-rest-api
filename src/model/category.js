const Pool = require("./../config/db");

const selectData = () => {
  return Pool.query(`SELECT * FROM category ORDER BY id`);
};

const insertData = (data) => {
  const { id, name } = data;
  return Pool.query(
    `insert into category(id,category_name) VALUES (${id},'${name}')`
  );
};

const updateData = (id, data) => {
  const { name } = data;
  return Pool.query(
    `UPDATE category SET category_name='${name}' WHERE id='${id}'`
  );
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM category where id='${id}'`);
};

const searchData = (id) => {
  return Pool.query(`Select * from category WHERE id='${id}'`);
};

const searchName = (name) => {
  return Pool.query(
    `SELECT id,category_name FROM category WHERE category_name ILIKE '${name}%' ORDER BY id`
  );
};
// const searchName = name =>{
//         return pool.query(`Select * from category WHERE category_name='${name}'`)
//       }
module.exports = {
  selectData,
  insertData,
  deleteData,
  updateData,
  searchData,
  searchName,
};
