module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('card', {
    title: DataTypes.STRING,
    side: DataTypes.STRING,
    type: DataTypes.STRING,
  }, { timestamps: false });
  Card.associate = (models) => {
    Card.hasMany(models.card_printing);
  };
  return Card;
};
