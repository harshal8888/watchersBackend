const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models/index");
const Userregister = db.userregister;
const { responseMessage } = require("../response/message");

exports.userRegistration = async (req, res) => {
  // validation
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.status(422).json({ errors: errors.array()[0].msg });
  //   return;
  // }
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // const { id, firstname, lastname, email, password, gender, age } = req.body;

  // create object of user
  const data = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    age: req.body.age,
  };

  // Save in the databasse

  Userregister.create(data)
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
