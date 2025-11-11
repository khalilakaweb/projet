//require mongoose module
const mongoose = require('mongoose');

//define projet schema
const Schema = mongoose.Schema

//create projet model schema for a small business project management system

const businessSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },  
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false, 
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    },
    year: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false,
    },
    rate: {
        type: Number,
        required: false,
        min: 0,
        max: 5
    },

}, { timestamps: true });

//export the projet model
module.exports = mongoose.model("business", businessSchema);
