const express = require('express');
const { validateBody } = require('../../helpers/validateBody');
const { schemas: { regisSchema,
    authSchema } } = require('../../models/user');
const { registration, authorization, getCurrentUser, logout } = require('../../controllers/auth');
const { authenticate } = require('../../middlewares/authenticate');

const router = express.Router();

router.post('/users/register', validateBody(regisSchema), registration);
router.post('/users/login', validateBody(authSchema), authorization);
router.post('/users/logout', authenticate, logout);

router.get('/current', authenticate, getCurrentUser);

module.exports = router;