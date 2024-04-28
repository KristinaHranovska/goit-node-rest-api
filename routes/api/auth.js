const express = require('express');
const { validateBody } = require('../../helpers/validateBody');
const { schemas: { regisSchema,
    authSchema } } = require('../../models/user');
const { registration } = require('../../controllers/auth')

const router = express.Router();


router.post('/register', validateBody(regisSchema), registration);

module.exports = router;