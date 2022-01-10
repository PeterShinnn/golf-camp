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
    Spot.hasMany(models.Image , { foreignKey: 'spotId', onDelete: 'CASCADE'});
    Spot.hasMany(models.Reservation , { foreignKey: 'spotId'});
  };

  // Spot.createSpot = async function({ name,address,city,state,country,lat,lng,price,userId }) {
  //   const spot = await Spot.create({
  //     name,
  //     address,
  //     city,
  //     state,
  //     country,
  //     lat,
  //     lng,
  //     price,
  //     userId
  //   });
  //   return await Spot.scope('')
  // }
  return Spot;
};
