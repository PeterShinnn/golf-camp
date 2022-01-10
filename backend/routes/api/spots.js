const express = require('express');
const asyncHandler = require('express-async-handler');

const { Spot } = require('../../db/models');

const router = express.Router();

// Create Spot
router.post('/', asyncHandler(async (req, res) => {
    const { url, name, address, city, state, country, lat, lng, price, userId} = req.body;

    const spot = await Spot.create({
        url,
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

    console.log(spot)
    // res.status(201);
    // res.json({ spot });
    
}))

module.exports = router;
