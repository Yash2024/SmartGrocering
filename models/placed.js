const mongoose = require('mongoose');

const placedSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    orderid: {type: String},
    orderlist: { type: [Number], required: true },
    status: {type: String},
    chat_id: {type: String},
    address: {type: String},
    deliver: {type: String}
}


module.exports = mongoose.model('Placed', placedSchema);