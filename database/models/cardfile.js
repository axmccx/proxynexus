module.exports = (sequelize, DataTypes) => {
  const CardFile = sequelize.define('CardFile', {
    code: DataTypes.STRING,
    fileName: DataTypes.STRING,
    rearFileName: DataTypes.STRING,
    scanSource: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });
  CardFile.associate = (models) => {
    CardFile.belongsTo(models.Card);
    CardFile.belongsTo(models.Pack);
  };
  return CardFile;
};
