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
      position: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('card_printings'),
};
