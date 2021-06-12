const express = require('express');
const router = express.Router();

// @route       POST api/users
// @des         Register User
// @access      Public

router.post('/', (req, res) => {
    // We are validating in front-end, so let's confirm for now that
    // we will get all the required data

    console.log(req.body);
    res.send('User route');
});

module.exports = router;
