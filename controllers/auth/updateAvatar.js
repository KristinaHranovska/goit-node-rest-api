const path = require("path");
const fs = require("fs/promises");

const { User } = require('../../models/user');
const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const { path: tempUpload, originalname } = req.file;
        const resultUpload = path.join(avatarsDir, originalname);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("avatars", originalname);
        await User.findByIdAndUpdate(_id, { avatarURL });
        res.json({
            avatarURL
        })
    } catch (error) {
        next(error)
    }
}

module.exports = updateAvatar
