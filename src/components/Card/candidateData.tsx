import Calendar from 'assets/images/icon.png'
import Application from 'assets/images/application.png'
import Profile from 'assets/images/profile.png'
import Message from 'assets/images/message.png'
interface IData {
  id: number
  src: string
  heading: string
  paragraph: number
  background: string
}
const data: IData[] = [
  {
    id: 0,
    src: Calendar,
    heading: 'Interview Scheduled',
    paragraph: 86,
    background: '#1D2E88',
  },
  {
    id: 1,
    src: Application,
    heading: 'Application Sent',
    paragraph: 75,
    background: '#F9C52B',
  },
  {
    id: 2,
    src: Profile,
    heading: 'Profile Viewed',
    paragraph: 45673,
    background: '#5D6EC7',
  },
  {
    id: 3,
    src: Message,
    heading: 'Unread Messages',
    paragraph: 93,
    background: '#22AB92',
  },
]

export default data
