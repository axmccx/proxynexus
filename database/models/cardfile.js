module.exports = (sequelize, DataTypes) => {
  const CardFile = sequelize.define('card_file', {
    front: DataTypes.STRING,
    rear: DataTypes.STRING,
    preview: DataTypes.STRING,
    preview_rear: DataTypes.STRING,
    scan_source: DataTypes.STRING,
  }, { timestamps: false });
  CardFile.associate = (models) => {
    CardFile.hasMany(models.CardPrinting);
  };
  return CardFile;
};
