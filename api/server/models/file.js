'use strict';
module.exports = (sequelize, DataTypes) => {
  var File = sequelize.define('File', {
    name: DataTypes.STRING,
    file: DataTypes.STRING,
    url: DataTypes.STRING,
    notes: DataTypes.STRING,
    project: DataTypes.STRING,
    folder: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return File;
};