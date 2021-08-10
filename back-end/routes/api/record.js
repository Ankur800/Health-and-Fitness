const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Record = require('../../models/Record');

// @route       GET api/record
// @desc        Get current user's record
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const record = await Record.findOne({ user: req.user.id });

        if (!record) {
            return res
                .status(400)
                .json({ msg: 'There is no record for this user.' });
        }

        res.json(record);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       Post api/record
// @desc        Create a user's record
// @access      Private
router.post('/', auth, async (req, res) => {
    let { goal, height, weight, age, sex, activityLevel, weeklyGoal } =
        req.body;

    // Building Record Object
    const recordFields = {};
    recordFields.user = req.user.id;
    // getting activity factor
    if (activityLevel === 'verylight') {
        recordFields.activityFactor = '1.2';
    } else if (activityLevel === 'light') {
        recordFields.activityFactor = '1.375';
    } else if (activityLevel === 'moderate') {
        recordFields.activityFactor = '1.55';
    } else if (activityLevel === 'veryactive') {
        recordFields.activityFactor = '1.7';
    } else if (activityLevel === 'extreme') {
        recordFields.activityFactor = '1.9';
    }

    // // convert height in inches
    // height = 0.393701 * parseFloat(height);

    // // convert weight in pounds
    // weight = 2.20462 * parseFloat(weight);

    if (sex === 'female') {
        recordFields.BMR =
            10 * parseInt(weight) +
            6.25 * parseInt(height) -
            5 * parseInt(age) -
            161;

        // 655 +
        // 4.35 * parseFloat(weight) +
        // 4.7 * parseFloat(height) -
        // 4.7 * parseFloat(age);
    } else if (sex === 'male') {
        recordFields.BMR =
            10 * parseInt(weight) +
            6.25 * parseInt(height) -
            5 * parseInt(age) +
            5;
        // 66 +
        // 6.23 * parseFloat(weight) +
        // 12.7 * parseFloat(height) -
        // 6.76 * parseFloat(age);
    }

    recordFields.dailyCalorieIntakeGoal =
        parseFloat(recordFields.BMR) * parseFloat(recordFields.activityFactor);

    if (goal === 'lose') {
        if (weeklyGoal === '0.25') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) + 225.5;
        } else if (weeklyGoal === '0.5') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) + 551;
        } else if (weeklyGoal === '0.75') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) + 776.5;
        } else if (weeklyGoal === '1') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) + 1102;
        }
    } else if (goal === 'gain') {
        if (weeklyGoal === '0.25') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) - 225.5;
        } else if (weeklyGoal === '0.5') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) - 551;
        } else if (weeklyGoal === '0.75') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) - 776.5;
        } else if (weeklyGoal === '1') {
            recordFields.dailyCalorieBurnGoal =
                parseFloat(recordFields.dailyCalorieIntakeGoal) - 1102;
        }
    } else if (goal === 'maintain') {
        recordFields.dailyCalorieBurnGoal = parseFloat(
            recordFields.dailyCalorieIntakeGoal
        );
    }

    try {
        let record = await Record.findOne({ user: req.user.id });

        if (record) {
            // Update
            record = await Record.findOneAndUpdate(
                { user: req.user.id },
                { $set: recordFields },
                { new: true }
            );

            return res.json(record);
        }

        // Creating new record

        recordFields.todayCalorieTaken = 0;
        recordFields.todayCalorieBurnt = 0;
        recordFields.pastRecords = [];

        record = new Record(recordFields);
        await record.save();
        res.json(record);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       Post api/record/add-food-intaken
// @desc        Adds calories intaken by user
// @access      Private
router.post('/add-food-intaken', auth, async (req, res) => {
    let { diet, energy } = req.body;

    try {
        let record = await Record.findOne({ user: req.user.id });

        if (!record) {
            res.status(500).send('Server Error');
        } else {
            const todayIntaken = record.todayCalorieTaken;

            record = await Record.findOneAndUpdate(
                { user: req.user.id },
                {
                    todayCalorieTaken:
                        parseFloat(energy) + parseFloat(todayIntaken),
                },
                { new: true }
            );
        }

        res.json(record);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       Post api/record/add-calories-burnt
// @desc        Adds calories burnt by user
// @access      Private
router.post('/add-calories-burnt', auth, async (req, res) => {
    let { exercise, energy } = req.body;

    try {
        let record = await Record.findOne({ user: req.user.id });

        if (!record) {
            res.status(500).send('Server Error');
        } else {
            const todayBurnt = record.todayCalorieBurnt;

            record = await Record.findOneAndUpdate(
                { user: req.user.id },
                {
                    todayCalorieBurnt:
                        parseFloat(todayBurnt) + parseFloat(energy),
                },
                { new: true }
            );
        }

        res.json(record);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
