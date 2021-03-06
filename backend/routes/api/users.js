const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');
const { validateSignup } = require('../authentication/loginAuth');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signup({ email, username, password });

  await setTokenCookie(res, user);

  return res.json({
    user,
  });
}),
);

module.exports = router;
