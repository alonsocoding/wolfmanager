'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TeamRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      project: {
        type: Sequelize.BOOLEAN
      },
      task: {
        type: Sequelize.BOOLEAN
      },
      team: {
        type: Sequelize.BOOLEAN
      },
      time: {
        type: Sequelize.BOOLEAN
      },
      file: {
        type: Sequelize.BOOLEAN
      },
      calendar: {
        type: Sequelize.BOOLEAN
      },
      finance: {
        type: Sequelize.BOOLEAN
      },
      notes: {
        type: Sequelize.BOOLEAN
      },
      reports: {
        type: Sequelize.BOOLEAN
      },
      client: {
        type: Sequelize.BOOLEAN
      },
      map: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TeamRoles');
  }
};