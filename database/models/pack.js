module.exports = (sequelize, DataTypes) => {
  const Pack = sequelize.define('Pack', {
    cycleCode: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  }, { timestamps: false });
  Pack.associate = (models) => {
    Pack.hasMany(models.CardFile);
  };
  return Pack;
};
