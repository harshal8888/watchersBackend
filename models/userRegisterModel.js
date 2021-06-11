module.exports = (sequelize, Sequelize) => {
  const userregister = sequelize.define("userregister", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  });

  return userregister;
};
