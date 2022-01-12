const { Spot } = require('../../../db/models');
const { Image } = require('../../../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get
async function getAllSpots() {
    return await Spot.findAll({
        include: Image
    });
};

async function getSpotByPk(taskId) {
    return await Spot.findByPk(taskId, {
        include: Image
    });
};

// Put/Patch
async function updateSpot(spot, reqBody) {
    const { name, address, city, state, country, lat, lng, price, userId} = reqBody;
    
    return await spot.update({
        name,
        address,
        city,
        state,
        country,
        lat,
        lng,
        price,
        userId
    });
}

async function deleteSpot(spotId) {
    const spot = await Spot.findByPk(spotId);
    if (!spot) throw new Error('Cannot find item');
  
    await spot.destroy({ where: { id: spot.id }});
    return spot.id;
  }

module.exports = {
    getAllSpots,
    getSpotByPk,
    updateSpot,
    deleteSpot
}
