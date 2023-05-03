import * as yup from 'yup'

export const Schema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required('First Name Required'),

  lasttName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required('Last Name Required'),

  email: yup.string().email().required('Email Required'),

  message: yup.string().max(400).required('Message Required'),
})
