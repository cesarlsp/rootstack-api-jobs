// Don't Touch!!
const path = require('path');

const directoryOfFile = path.join(
  path.join(__dirname, '../../config/migrations.js')
);
const {tableDB, getTableDB, schemaDB} = require(directoryOfFile);

const tableName = tableDB('jobs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      tableName,
      schemaDB({
        name: {
          type: Sequelize.STRING(60),
          allowNull: false
        },
        description: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        city: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        latitude: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        longitude: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
      })
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable(getTableDB());
  }
};
