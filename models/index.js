const Sequelize = require("sequelize");

const sequelize = new Sequelize("watchers", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 9,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected database");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
// module.exports = sequelize;
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userregister = require("./userRegisterModel.js")(sequelize, Sequelize);
db.product = require("./productModel.js")(sequelize, Sequelize);

module.exports = db;
