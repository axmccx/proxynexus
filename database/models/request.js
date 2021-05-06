module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('request', {
    generate_type: DataTypes.STRING,
    selected_tab: DataTypes.STRING,
    request_text: DataTypes.TEXT,
    card_list: DataTypes.ARRAY(DataTypes.STRING),
    hash: DataTypes.STRING,
    filepath: DataTypes.STRING,
    is_download_available: DataTypes.BOOLEAN,
  }, {
    underscored: true,
  });
  // requests.associate = function(models) {
  //   // associations can be defined here
  // };
  return Request;
};
