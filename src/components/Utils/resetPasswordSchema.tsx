import * as yup from 'yup'

export const Schema = yup
  .object({
    password: yup
      .string()
      .min(6)
      .required('Password Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      )
      .min(3, 'Seems a bit short...')
      .max(256, 'Should not exceed more than 256 characters'),
    confirmpassword: yup
      .string()
      .required('Password Mismatch')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      )
      .when('password', {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same'),
      }),
  })
  .required()
