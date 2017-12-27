'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    project: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Note;
};