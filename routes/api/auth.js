const express = require('express');
const { validateBody } = require('../../helpers/validateBody');
const { schemas: { regisSchema,
    authSchema } } = require('../../models/user');

const { registration, authorization, getCurrentUser, logout, subscriptionUpdate, updateAvatar } = require('../../controllers/index');
const { authenticate } = require('../../middlewares/authenticate');
const { upload } = require('../../middlewares/upload');

const router = express.Router();

router.post('/users/register', validateBody(regisSchema), registration);
router.post('/users/login', validateBody(authSchema), authorization);
router.post('/users/logout', authenticate, logout);

router.get('/users/current', authenticate, getCurrentUser);

router.patch('/users', authenticate, subscriptionUpdate);
router.patch("/users/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;