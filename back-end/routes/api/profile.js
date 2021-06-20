const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       GET api/profile/me
// @desc        Get current user's profile
// @access      Private
router.get('/me', auth, async (req, res) => {
    try {
        // TODO: FIX USER NAME
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'users',
            ['name']
        );

        if (!profile) {
            return res
                .status(400)
                .json({ msg: 'There is no profile for this user.' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.messgae);
        res.status(500).send('Server Error');
    }
});

// @route       Post api/profile
// @desc        Create or Update a user's profile
// @access      Private
router.post('/', auth, async (req, res) => {
    const { age, gender, height, weight, currentFitness, fitnessGoal, pledge } =
        req.body;

    // Build Profile Object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (age) profileFields.age = age;
    if (gender) profileFields.gender = gender;
    if (height) profileFields.height = height;
    if (weight) profileFields.weight = weight;
    if (currentFitness) profileFields.currentFitness = currentFitness;
    if (fitnessGoal) profileFields.fitnessGoal = fitnessGoal;
    if (pledge) profileFields.pledge = pledge;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            // Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        }

        // Create a new profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
