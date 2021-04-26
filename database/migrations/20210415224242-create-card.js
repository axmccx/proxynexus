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
    },
  ),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('cards'),
};
