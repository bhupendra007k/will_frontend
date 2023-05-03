import * as yup from 'yup'

export const Schema = yup
  .object({
    email: yup.string().email().required('Email Required'),
    password: yup
      .string()
      .required('Password Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      )
      .min(8, 'Seems a bit short...')
      .max(16, 'Should not exceed more than 16 characters'),
  })
  .required()
