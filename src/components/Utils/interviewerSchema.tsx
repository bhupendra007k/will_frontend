import * as yup from 'yup'

export const Schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
      .max(40)
      .required('Name Required'),

    designation: yup.string().required('Designation Required'),
    phone: yup
      .string()
      .required('This field is Required')
      .matches(/^\d{10}$/, 'must containe 10 digits')
      .min(8, 'Seems a bit short...')
      .max(10, 'Should not exceed more than 10 digits'),

    email: yup.string().email().required('Email Required'),

    jobType: yup.string().required('Job Type is required'),

    experience: yup.number().min(1).max(20).required('Experience Is required'),

    profilePicture: yup.mixed().test('required', 'You need to provide a file', (value) => {
      return value && value.length
    }),
  })
  .required()
