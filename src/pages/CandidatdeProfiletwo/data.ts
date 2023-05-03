import Wits from 'assets/images/Smal.png'

export interface IData {
  heading: string
  logo: string
  title: string
  startDate: string
  endDate: string
  city: string
  country: string
}
const data: IData[] = [
  {
    heading: 'Education',
    logo: Wits,
    title: 'Bachelor of computer application',
    startDate: 'June 2018',
    endDate: 'June 2021',
    city: 'Chandigarh',
    country: 'India',
  },
  {
    heading: 'Work Experience',
    logo: Wits,
    title: 'Bachelor of computer application',
    startDate: 'June 2018',
    endDate: 'June 2021',
    city: 'Chandigarh',
    country: 'India',
  },
]

export default data
