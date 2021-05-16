module.exports = (sequelize, DataTypes) => (
  sequelize.define('card_file', {
    pdf: DataTypes.STRING,
    pdf_back: DataTypes.STRING,
    mpc_fitted: DataTypes.STRING,
    mpc_fitted_back: DataTypes.STRING,
    mpc_scaled: DataTypes.STRING,
    mpc_scaled_back: DataTypes.STRING,
    preview: DataTypes.STRING,
    preview_back: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  })
);
