module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'Packs',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cycleCode: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
  ),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Packs'),
};
