const express = require('express');
const asyncHandler = require('express-async-handler');
const { validateSpotForm } = require('../authentication/spotAuth');

const spotService = require('./services/spot-service');
const { Spot } = require('../../db/models');
const { Image } = require('../../db/models');

const router = express.Router();

// Get all spots
router.get('/', asyncHandler(async (req,res) => {
    const spots = await Spot.findAll({
        include: Image
    });
    //const spots = spotService.getAllSpots();
    res.json(spots);
}));

// Create Spot
router.post('/', asyncHandler(async (req, res) => {
    const { name, address, city, state, country, lat, lng, price, userId} = req.body;

    const spot = await Spot.create({
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

    res.status(201);
    res.json({spot});
}))

// Get one spot
router.get('/:id(\\d+)', asyncHandler(async (req,res) => {
    const spot = await Spot.findOne({
        include: Image,
        where: { id: req.params.id}
    })
    res.json(spot);
}));

// Updates Spot
router.put('/:id(\\d+)', asyncHandler(async (req,res) => {
    //const { name, address, city, state, country, lat, lng, price, userId} = req.body;
    const spotId = parseInt(req.params.id, 10);
    let spot = await spotService.getSpotByPk(spotId);

    if (spot) {
        await spotService.updateSpot(spot, req.body)
        spot = await spotService.getSpotByPk(spotId);
        res.json( spot );
        res.status(200);
    }
}));

//Gets images related to spot ID
router.get('/:id(\\d+)/images', asyncHandler(async (req,res) => {
    const urlImg = await Image.findAll({
        where: {spotId: req.params.id}
    })
    return res.json(urlImg);
}));

module.exports = router;
