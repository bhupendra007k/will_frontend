import * as yup from 'yup'

export const Schema = yup
  .object({
    email: yup.string().email().required('Required'),
    firstname: yup
      .string()
      .required(' First Name Required')
      .matches(/^[aA-zZ\s]+$/, 'Please enter valid name'),
    lastname: yup
      .string()
      .required(' Last Name Required')
      .matches(/^[aA-zZ\s]+$/, 'Please enter valid name'),
    username: yup
      .string()
      .required(' Username Required')
      .min(1, 'Mininum 1 characters')
      .max(15, 'Maximum 15 characters'),

    mobile: yup
      .number()
      .typeError('you must specify a number')
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
    address: yup.string().required(' Address Required'),
    password: yup
      .string()
      .required('Password Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      )
      .min(3, 'Seems a bit short...')
      .max(256, 'Should not exceed more than 256 characters'),
    confirmpassword: yup
      .string()
      .required('enter password to confirm')
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
