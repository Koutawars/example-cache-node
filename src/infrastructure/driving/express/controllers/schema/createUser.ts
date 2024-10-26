import Joi from 'joi';

const schema = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }).required()
});

export {
  schema
}