import Joi from 'joi';

const schema = Joi.object({
  params: Joi.object({
    id: Joi.string().required(),
  }).required()
}).unknown(true);

export {
  schema
}