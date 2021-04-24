module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'card_printings',
    'card_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'cards',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  ).then(() => queryInterface.addColumn(
    'card_printings',
    'pack_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'packs',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  )).then(() => queryInterface.addColumn(
    'card_printings',
    'card_file_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'card_files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  )),
  down: (queryInterface, _) => queryInterface.removeColumn(
    'card_printings',
    'card_id',
  ).then(() => queryInterface.removeColumn(
    'card_printings',
    'pack_id',
  )).then(() => queryInterface.removeColumn(
    'card_printings',
    'card_file_id',
  )),
};
