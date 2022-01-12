const { Image } = require('../../../db/models');

async function getImgByKey(spotId) {
    return await Image.findOne({
        where: {spotId}
    })
};

// Put/Patch
async function updateImg(img, reqBody) {
    const { url, spotId } = reqBody

    return await img.update({
        url, spotId
    });
}

module.exports = {
    getImgByKey,
    updateImg
}
