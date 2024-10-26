import Joi from 'joi';

const schema = Joi.object({
  params: Joi.object({
    id: Joi.string().required(),
  }).required(),
  body: Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
  }).required()
});

export {
  schema
}