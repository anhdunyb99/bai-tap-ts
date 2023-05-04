'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init({
    role: DataTypes.ENUM('Admin', 'User')
  }, {
    sequelize,
    modelName: 'Role',
  });
  Role.associate = (models) => {
    models.Role.hasMany(models.User, {
      foreignKey: "roleId",
    });
  };
  return Role;
};