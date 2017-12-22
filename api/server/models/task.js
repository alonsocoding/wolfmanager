'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    overview: DataTypes.STRING,
    project_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    status: DataTypes.STRING,
  });
  Task.associate = (models) => {
    Task.belongsTo(models.Project, {
    foreignKey: 'projectId',
    onDelete: 'CASCADE',
  });
};

  return Task;
};