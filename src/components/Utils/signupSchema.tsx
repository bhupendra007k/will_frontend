import * as yup from 'yup'

export const Schema = yup
  .object({
    email: yup.string().email().required('Email Required'),

    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .max(40)
      .required('Name Required'),
    password: yup
      .string()
      .min(6)
      .required('Password Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      )
      .min(3, 'Seems a bit short...')
      .max(22, 'Should not exceed more than 22 characters'),
    confirmpassword: yup
      .string()
      .required('Confirm password is required')

      .when('password', {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same'),
      }),
  })
  .required()
