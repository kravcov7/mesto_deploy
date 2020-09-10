const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { urlValidator } = require('../models/urlVaidator');
const {
  getUsers,
  getUserId,
  updateUserInfo,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
}), getUserId);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUserInfo);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(urlValidator),
  }),
}), updateAvatar);

module.exports = router;
