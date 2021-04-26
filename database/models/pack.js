module.exports = (sequelize, DataTypes) => {
  const Pack = sequelize.define('pack', {
    pack_code: DataTypes.STRING,
    name: DataTypes.STRING,
    is_core: DataTypes.BOOLEAN,
    is_visible: DataTypes.BOOLEAN,
  }, { timestamps: false });
  Pack.associate = (models) => {
    Pack.hasMany(models.card_printing);
  };
  return Pack;
};
