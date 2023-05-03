import * as yup from 'yup'

export const Schema = yup
  .object({
    email: yup.string().email().required('Email Required'),
  })
  .required()
