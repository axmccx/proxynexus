module.exports = (sequelize, DataTypes) => {
  const Pack = sequelize.define('pack', {
    pack_code: DataTypes.STRING,
    name: DataTypes.STRING,
    is_core: DataTypes.BOOL,
    is_visible: DataTypes.BOOL,
  }, { timestamps: false });
  Pack.associate = (models) => {
    Pack.hasMany(models.CardPrinting);
  };
  return Pack;
};
