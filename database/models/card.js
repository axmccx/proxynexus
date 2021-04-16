module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    side: DataTypes.STRING,
  }, { timestamps: false });
  Card.associate = (models) => {
    Card.hasMany(models.CardFile);
  };
  return Card;
};
