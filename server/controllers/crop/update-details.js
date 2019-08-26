'use strict';

var lib = require('../../lib');

/* Controller to update crop details */
var updateDetails = async (req, res, next) => {

    try {

        let decoded = req.decoded;
        let cropId = req.params.cropId;

        let cropDetails = {
            mobileNumber: decoded.mobileNumber,
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            variety: req.body.variety,
            grade: req.body.grade,
            cropId: cropId
        };

        await lib.crop.update.details(cropDetails);

        return res.json({
            success: true
        });

    } catch (err) {
        return next(err);
    }

}

module.exports = updateDetails;