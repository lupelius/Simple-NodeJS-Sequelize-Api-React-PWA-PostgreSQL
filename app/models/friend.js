module.exports = (sequelize, DataTypes) => {
  let Friend = sequelize.define('Friend', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return Friend;
};
