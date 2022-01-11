const express = require('express');
const asyncHandler = require('express-async-handler');
const { validateSpotForm } = require('../authentication/spotAuth');

const { Spot } = require('../../db/models');
const { Image } = require('../../db/models');

const router = express.Router();

// Get all spots
router.get('/', asyncHandler(async (req,res) => {
    const spots = await Spot.findAll({
        include: Image
    });
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

// Updates Spot
router.put('/:id', asyncHandler(async (req,res) => {
    const { name, address, city, state, country, lat, lng, price, userId} = req.body;

    const spot = await Spot.update({
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

    res.json( spot );
    res.status(200);
}))

router.get('/:id/images', asyncHandler(async (req,res) => {
    const urlImg = await Image.findAll({
        where: {spotId: req.params.id}
    })
    return res.json(urlImg);
}));

module.exports = router;
