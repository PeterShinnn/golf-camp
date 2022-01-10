const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSpotForm = [
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a name with at least 4 characters.'),
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a address with at least 4 characters.'),
    check('city')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a city with at least 2 characters.'),
    check('state')
        .isLength({ min: 2, max: 2 })
        .withMessage('Please provide the state abbreviations with 2 characters.'),
    check('country')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a country name with at least 4 characters.'),
    check('lat')
        .not()
        .isString()
        .withMessage('Please provide a a valid latitude cordinates'),
    check('lng')
        .not()
        .isString()
        .withMessage('Please provide a a valid longitude cordinates'),
    check('price')
        .not()
        .isString()
        .withMessage('Please provide a a valid price'),
    handleValidationErrors,
];

module.exports = {
    validateSpotForm
}
