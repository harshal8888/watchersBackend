module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define("product", {
    productId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: Sequelize.STRING,
    },
    productDisciption: {
      type: Sequelize.STRING,
    },
  });

  return product;
};
