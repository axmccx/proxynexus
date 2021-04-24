module.exports = (sequelize, DataTypes) => {
  const CardPrinting = sequelize.define('card_printing', {
    code: DataTypes.STRING,
  }, { timestamps: false });
  CardPrinting.associate = (models) => {
    CardPrinting.belongsTo(models.Card);
    CardPrinting.belongsTo(models.CardFile);
    CardPrinting.belongsTo(models.Pack);
  };
  return CardPrinting;
};
