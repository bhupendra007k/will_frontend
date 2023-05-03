import * as yup from 'yup'

export const Schema = yup
  .object({
    title: yup.string().required('job title Required'),

    description: yup.string().required('Job Description Required'),

    department: yup.string().required('Department Required'),

    type: yup.string().required('Job Type is required'),

    location: yup.string().required('Location is required'),

    salaryRngMin: yup.number().positive().required('Min salary is required'),

    salaryRngMax: yup.number().positive().required('Max salary is required'),

    minExperienceRng: yup.number().positive().required('Min Experience is required'),

    maxExperienceRng: yup.number().positive().required('Max Experience is required'),

    opening: yup.string().required('No. of positions are required'),
  })
  .required()
