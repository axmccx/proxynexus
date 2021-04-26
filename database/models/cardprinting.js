module.exports = (sequelize, DataTypes) => {
  const CardPrinting = sequelize.define('card_printing', {
    code: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });
  CardPrinting.associate = (models) => {
    CardPrinting.belongsTo(models.pack);
    CardPrinting.belongsTo(models.card);
    CardPrinting.belongsTo(models.card_file, { as: 'lm_card_file' });
    CardPrinting.belongsTo(models.card_file, { as: 'pt_card_file' });
    CardPrinting.belongsTo(models.card_file, { as: 'de_card_file' });
  };
  return CardPrinting;
};
