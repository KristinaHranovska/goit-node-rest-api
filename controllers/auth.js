const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require('../models/user');
const { HttpError } = require("../helpers/HttpError");
const { SECRET_KEY } = process.env;

const registration = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            throw HttpError(409, "Email already in use");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ ...req.body, password: hashPassword });

        res.status(201).json({
            email: newUser.email,
            subscription: newUser.subscription,
        })
    }
    catch (error) {
        next(error)
    }
}

const authorization = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw HttpError(401, "Email or password is wrong");
        }

        const passwordCompare = await bcrypt.compare(password, user.password)

        if (!passwordCompare) {
            throw HttpError(401, "Email or password is wrong");
        }

        const payload = {
            id: user._id,
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

        res.json({
            email: user.email,
            subscription: user.subscription,

            token
        })

    } catch (error) {
        next(error)
    }
}

const getCurrentUser = async (req, res) => {
    try {
        const { email, subscription } = req.user;

        res.json({
            email,
            subscription,
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    registration,
    authorization,
    getCurrentUser,
}