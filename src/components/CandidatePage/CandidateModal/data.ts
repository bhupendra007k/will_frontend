import Wits from 'assets/images/Smal.png'
import Edit from 'assets/images/Edit.png'
import Delete from 'assets/images/delete.png'
import Add from 'assets/images/add.png'

interface IData {
  heading: string
  logo: string
  title: string
  startDate: string
  endDate: string
  city: string
  country: string
  edit: string
  deleteButton: string
  add: string
  image: string
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
    edit: Edit,
    deleteButton: Delete,
    add: 'Add Education',
    image: Add,
  },
  {
    heading: 'Work Experience',
    logo: Wits,
    title: 'Bachelor of computer application',
    startDate: 'June 2018',
    endDate: 'June 2021',
    city: 'Chandigarh',
    country: 'India',
    edit: Edit,
    deleteButton: Delete,
    add: 'Add Work Experience',
    image: Add,
  },
]

export default data
