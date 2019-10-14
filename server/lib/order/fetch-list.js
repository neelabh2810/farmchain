'use strict';

var models = require('../../models');
var mongoose = require('mongoose');

/* Function for get list of orders */
var fetchList = async (user) => {

    let Order = models.Order;

    var orders = await Order.find({
        buyerId: mongoose.Types.ObjectId(user._id)
    }, {
        __v: 0
    }).exec()

    return orders;

}

module.exports = fetchList;