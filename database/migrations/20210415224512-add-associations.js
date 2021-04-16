module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'CardFiles',
    'CardId',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cards',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  ).then(() => queryInterface.addColumn(
    'CardFiles',
    'PackId',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Packs',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  )),
  down: (queryInterface, _) => queryInterface.removeColumn(
    'CardFiles',
    'CardId',
  ).then(() => queryInterface.removeColumn(
    'CardFiles',
    'PackId',
  )),
};
