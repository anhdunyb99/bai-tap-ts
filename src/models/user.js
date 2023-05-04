'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    status: DataTypes.ENUM('active', 'inactive'),
    codeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = (models) => {
    models.User.belongsToMany(models.Project, {
      through: models.UserProject,
      foreignKey: "userId",
      otherKey: "projectId",
    });
    models.User.hasMany(models.Task, {
      foreignKey: "userId",
    });
  };
  return User;
};