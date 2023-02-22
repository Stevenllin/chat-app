import * as Yup from 'yup';

const emailRegExp = /^[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*$/;

const emailSchema = Yup.string()
  .matches(emailRegExp, { message: 'The email format is wrong!', excludeEmptyString: true });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  emailSchema
}