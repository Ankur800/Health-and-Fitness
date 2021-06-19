const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    currentFitness: {
        type: String,
        required: true,
    },
    fitnessGoal: {
        type: String,
        required: true,
    },
    pledge: {
        type: String,
        required: true,
    },
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
