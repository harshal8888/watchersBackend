const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../models/index");
const Product = db.product;
const { responseMessage } = require("../../response/message");

exports.createProduct = (req, res) => {
  const { productName, productDisciption } = req.body;

  // create object
  const data = {
    productName: productName,
    productDisciption: productDisciption,
  };
  // Save in the databasse

  Product.create(data)
    .then((data) => {
      res.json({
        message: responseMessage.success.dataAdded,
        result: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
