'use strict';
module.exports = (sequelize, DataTypes) => {
  var TeamRole = sequelize.define('TeamRole', {
    name: DataTypes.STRING,
    project: DataTypes.BOOLEAN,
    task: DataTypes.BOOLEAN,
    team: DataTypes.BOOLEAN,
    time: DataTypes.BOOLEAN,
    file: DataTypes.BOOLEAN,
    calendar: DataTypes.BOOLEAN,
    finance: DataTypes.BOOLEAN,
    notes: DataTypes.BOOLEAN,
    reports: DataTypes.BOOLEAN,
    client: DataTypes.BOOLEAN,
    map: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamRole;
};