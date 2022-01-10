'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    startDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.User , { foreignKey: 'userId'})
    Reservation.belongsTo(models.Spot , { foreignKey: 'spotId'})
  };
  return Reservation;
};
