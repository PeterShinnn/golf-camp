'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User , { foreignKey: 'userId'});
    Spot.hasMany(models.Image , { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
    Spot.hasMany(models.Reservation , { foreignKey: 'spotId'});
  };
  return Spot;
};
