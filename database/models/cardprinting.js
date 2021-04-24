module.exports = (sequelize, DataTypes) => {
  const CardPrinting = sequelize.define('card_printing', {
    code: DataTypes.STRING,
  }, { timestamps: false });
  CardPrinting.associate = (models) => {
    CardPrinting.belongsTo(models.Pack);
    CardPrinting.belongsTo(models.Card);
    CardPrinting.belongsTo(models.CardFile, { as: 'lm_card_file_id' });
    CardPrinting.belongsTo(models.CardFile, { as: 'pt_card_file_id' });
    CardPrinting.belongsTo(models.CardFile, { as: 'de_card_file_id' });
  };
  return CardPrinting;
};
