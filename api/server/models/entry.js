'use strict';
module.exports = (sequelize, DataTypes) => {
  var Entry = sequelize.define('Entry', {
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    category: DataTypes.STRING,
    project_name: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Entry;
};