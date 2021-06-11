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
    categoryId: {
      type: Sequelize.INTEGER,
    },
  });

  return product;
};
