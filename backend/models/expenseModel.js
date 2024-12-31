const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.mongoose.Schema({
    title:{
        type: String,
        require: true,
        trim: true,
        maxLenght: 50,
    },
    amount: {
        type: Number,
        required: true,
        maxLenght: 20,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        maxLenght: 20,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('expense', ExpenseSchema);