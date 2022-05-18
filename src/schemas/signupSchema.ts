import Joi from "joi";

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});

export default signupSchema;
