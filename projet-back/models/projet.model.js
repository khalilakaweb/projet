//require mongoose module
const mongoose = require('mongoose');

//define projet schema
const Schema = mongoose.Schema

//create projet model schema for a small busness project management system

const businessSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },  
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true, 
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    },
    price: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },

}, { timestamps: true });

//export the projet model
module.exports = mongoose.model("business", businessSchema);
