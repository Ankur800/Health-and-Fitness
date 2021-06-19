require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route       POST api/users
// @des         Register User
// @access      Public

router.post('/', async (req, res) => {
    // We are validating in front-end, so let's confirm for now that
    // we will get all the required data

    const { name, email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email }); // email : email
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'User already exists' }] });
        }

        // TODO: Change for other data
        user = new User({
            name,
            email,
            password,
        });

        // Encrypting the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        // TODO change expiring time to 3600
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
