'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Priority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Priority.init({
    name: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Priority',
  });
  Priority.associate = (models) => {
    models.Priority.hasMany(models.Task, {
      foreignKey: "priorityId",
    });
  };
  return Priority;
};