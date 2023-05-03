export interface IData {
  label: string
  value: string
}

const salaryOptions: IData[] = [
  { label: '$0 - $100 ', value: '$0 - $100' },
  { label: '$101 - $200 ', value: '$101 - $200' },
  { label: '$201 - $500 ', value: '$201 - $500' },
  { label: '$501 - $750 ', value: '$501 - $750' },
  { label: '$751 - $1000 ', value: '$751 - $1000' },
  { label: '$1000 Above ', value: '$1000 Above' },
]
const jobtypeOptions = [
  { label: 'Full Time Jobs ', value: 'Full Time Jobs' },
  { label: 'Part Time Jobs ', value: 'Part Time Jobs' },
  { label: 'Remote Jobs ', value: 'Remote Jobs' },
  { label: 'Internship Jobs ', value: 'Intership Jobs' },
  { label: 'Contract ', value: 'Contract' },
  { label: 'Training Jobs ', value: 'Training Jobs' },
]
const locattionOptions = [
  { label: 'Chandigarh ', value: 'Chandigarh' },
  { label: 'Jaipur ', value: 'Jaipur' },
  { label: 'Mumbai ', value: 'Mumbai' },
  { label: 'Delhi ', value: 'Delhi' },
  { label: 'Agra ', value: 'Agra' },
]
const languageOptions = [
  { label: 'English ', value: 'English' },
  { label: 'French ', value: 'French' },
  { label: 'Hindi ', value: 'Hindi' },
  { label: 'Punjabi ', value: 'Punjabi' },
]

export { salaryOptions, jobtypeOptions, locattionOptions, languageOptions }
