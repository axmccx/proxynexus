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
    'lm_card_file_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'card_files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  )).then(() => queryInterface.addColumn(
    'card_printings',
    'pt_card_file_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'card_files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  ))
    .then(() => queryInterface.addColumn(
      'card_printings',
      'de_card_file_id',
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
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'card_printings',
    'card_id',
  )
    .then(() => queryInterface.removeColumn(
      'card_printings',
      'pack_id',
    ))
    .then(() => queryInterface.removeColumn(
      'card_printings',
      'lm_card_file_id',
    )).then(() => queryInterface.removeColumn(
      'card_printings',
      'pt_card_file_id',
    ))
    .then(() => queryInterface.removeColumn(
      'card_printings',
      'de_card_file_id',
    )),
};
