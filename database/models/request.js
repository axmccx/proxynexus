module.exports = (sequelize, DataTypes) => {
  return sequelize.define('request', {
    generate_type: DataTypes.STRING,
    selected_tab: DataTypes.STRING,
    request_text: DataTypes.TEXT,
    card_list: DataTypes.ARRAY(DataTypes.STRING),
    hash: DataTypes.STRING,
    filename: DataTypes.STRING,
    is_download_available: DataTypes.BOOLEAN,
  }, {
    underscored: true,
  });
};
