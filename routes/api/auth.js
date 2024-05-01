const express = require('express');
const { validateBody } = require('../../helpers/validateBody');
const { schemas: { regisSchema,
    authSchema } } = require('../../models/user');
const { registration, authorization, getCurrentUser } = require('../../controllers/auth');
const { authenticate } = require('../../middlewares/authenticate');

const router = express.Router();

router.post('/users/register', validateBody(regisSchema), registration);
router.post('/users/login', validateBody(authSchema), authorization);

router.get('/current', authenticate, getCurrentUser);

module.exports = router;