const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');

const router = express.Router();

// Create Spot
router.post('/', asyncHandler(async (req, res) => {
    // const { url } = req.body
    // const image = await Image.create({ url })

    return
}))

module.exports = router;
