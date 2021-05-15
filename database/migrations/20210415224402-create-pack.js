module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'packs',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pack_code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      is_core: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_visible: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('packs'),
};
