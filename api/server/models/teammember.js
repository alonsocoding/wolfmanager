'use strict';
module.exports = (sequelize, DataTypes) => {
  var TeamMember = sequelize.define('TeamMember', {
    username: DataTypes.STRING,
    project_name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamMember;
};