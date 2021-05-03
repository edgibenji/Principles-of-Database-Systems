const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    regID: {
        type: String,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Event'
    }
})

module.exports = mongoose.model('Registration', registrationSchema)