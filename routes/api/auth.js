const express = require('express');
const { validateBody } = require('../../helpers/validateBody');
const { schemas: { regisSchema,
    authSchema } } = require('../../models/user');
const { registration, authorization } = require('../../controllers/auth')

const router = express.Router();

router.post('/users/register', validateBody(regisSchema), registration);
router.post('/users/login', validateBody(authSchema), authorization);

module.exports = router;