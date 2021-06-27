const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    goal: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    sex: {
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
    activityLevel: {
        type: String,
        required: true,
    },
    weeklyGoal: {
        type: String,
        required: true,
    },
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
