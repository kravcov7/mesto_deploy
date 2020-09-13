const validator = require('validator/lib/isURL');
const BadReqError = require('../errors/BadRequest');

const urlValidator = (link) => {
  if (!validator(link)) {
    throw new BadReqError('Формат ссылки не верный');
  } else return link;
};

module.exports = { urlValidator };
