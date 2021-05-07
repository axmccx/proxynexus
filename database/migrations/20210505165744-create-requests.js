module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'requests',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      generate_type: {
        type: Sequelize.STRING,
      },
      selected_tab: {
        type: Sequelize.STRING,
      },
      request_text: {
        type: Sequelize.TEXT,
      },
      card_list: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      hash: {
        type: Sequelize.STRING,
      },
      filename: {
        type: Sequelize.STRING,
      },
      is_download_available: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
  ),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('requests'),
};
