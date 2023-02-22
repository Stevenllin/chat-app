import * as Yup from 'yup';

export const PageValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
})
