'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING,
    progress: DataTypes.STRING,
    category: DataTypes.STRING
  });
  Project.associate = (models) => {
    Project.hasMany(models.Task, {
      foreignKey: 'projectId',
      as: 'tasks'
    });
  };
  
  return Project;
};