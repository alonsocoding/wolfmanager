'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProjectCategory = sequelize.define('ProjectCategory', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProjectCategory;
};