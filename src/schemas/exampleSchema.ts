import Joi from "joi";

const exampleSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

export default exampleSchema;
