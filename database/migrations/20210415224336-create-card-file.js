module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'card_files',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      front: {
        type: Sequelize.STRING,
      },
      rear: {
        type: Sequelize.STRING,
      },
      preview: {
        type: Sequelize.STRING,
      },
      preview_rear: {
        type: Sequelize.STRING,
      },
      scan_source: {
        type: Sequelize.STRING,
      },
    },
  ),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('card_files'),
};
