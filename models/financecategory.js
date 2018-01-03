'use strict';
module.exports = (sequelize, DataTypes) => {
  var FinanceCategory = sequelize.define('FinanceCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FinanceCategory;
};