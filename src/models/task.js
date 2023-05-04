'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    priorityId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    order: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  Task.associate = (models) => {
    models.Task.belongsTo(models.Status, {
      foreignKey: "statusId",
    });
    models.Task.belongsTo(models.Project, {
      foreignKey: "projectId",
    });
    models.Task.belongsTo(models.Priority, {
      foreignKey: "priorityId",
    });
    models.Task.belongsTo(models.Type, {
      foreignKey: "typeId",
    });
  };
  return Task;
};