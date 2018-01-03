'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      due_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      projectId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          key: 'id',
          as: 'projectId',
        },
      },
  }),
  down: (queryInterface/*, Sequelize*/) => queryInterface.dropTable('Tasks'),
  
};