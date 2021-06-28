const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    BMR: {
        type: String,
        required: true,
    },
    activityFactor: {
        type: String,
        required: true,
    },
    dailyCalorieIntakeGoal: {
        type: String,
        required: true,
    },
    dailyCalorieBurnGoal: {
        type: String,
        required: true,
    },
    todayCalorieTaken: {
        type: String,
        required: true,
    },
    todayCalorieBurnt: {
        type: String,
        required: true,
    },
    pastRecords: {
        type: [Map],
    },
});

module.exports = Record = mongoose.model('Record', RecordSchema);
