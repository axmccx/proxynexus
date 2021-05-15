module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'cards',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      side: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('cards'),
};
