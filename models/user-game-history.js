'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userHistory.belongsTo(models.user, {
        foreignKey: 'userId',
      })
      // define association here
    }
  }
  userHistory.init({
    result: DataTypes.STRING,
    timePlay: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'userHistory',
  });
  return userHistory;
};