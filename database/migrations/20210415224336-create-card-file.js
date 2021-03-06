module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'card_files',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pdf: {
        type: Sequelize.STRING,
      },
      pdf_back: {
        type: Sequelize.STRING,
      },
      mpc_fitted: {
        type: Sequelize.STRING,
      },
      mpc_fitted_back: {
        type: Sequelize.STRING,
      },
      mpc_scaled: {
        type: Sequelize.STRING,
      },
      mpc_scaled_back: {
        type: Sequelize.STRING,
      },
      preview: {
        type: Sequelize.STRING,
      },
      preview_back: {
        type: Sequelize.STRING,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('card_files'),
};
