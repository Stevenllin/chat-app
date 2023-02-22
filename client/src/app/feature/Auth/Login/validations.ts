import * as Yup from 'yup';

export const PageValidationSchema = Yup.object().shape({
  account: Yup.string().required(),
  password: Yup.string().required()
})
