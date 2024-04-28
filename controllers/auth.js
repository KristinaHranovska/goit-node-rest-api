const { User } = require('../models/user');
const { HttpError } = require("../helpers/HttpError");

const registration = async (req, res) => {
    const newUser = await User.create(req.body);

    res.json({
        email: newUser.email,
        name: newUser.name,
    })
}

module.exports = {
    registration,
}