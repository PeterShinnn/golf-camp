const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');

const router = express.Router();

// Create Spot
router.post('/', asyncHandler(async (req, res) => {
    const { url, spotId } = req.body
    const image = await Image.create({ url, spotId })

    res.status(201);
    res.json({ image });
}))

module.exports = router;
