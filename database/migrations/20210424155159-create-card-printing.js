module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'card_printings',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
    },
  ),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('card_printings'),
};
