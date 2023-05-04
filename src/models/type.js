'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
    
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Type',
  });

  Type.associate = (models) => {
    models.Status.hasMany(models.Task, {
      foreignKey: "typeId",
    });
  };
  return Type;
};