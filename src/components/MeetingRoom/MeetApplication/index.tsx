import {
  ApplicationWrapper,
  ApplicationIcon,
  Image,
  ApplicationName,
  Header,
  IconWrapper,
  FilterWrapper,
} from 'styles/MeetingRoom/MeetApplication'
import Trello from 'assets/images/trello.png'
import Meet from 'assets/images/gMeet.png'
import Zoom from 'assets/images/zoom.png'
import TrelloIcon from 'assets/images/ellipse2.png'
import MeetIcon from 'assets/images/ellipse1.png'
import ZoomIcon from 'assets/images/ellipse3.png'
import Toggle from 'components/Switch'

const Application = () => (
  <ApplicationWrapper>
    <ApplicationIcon>
      <Image src={Trello} alt="trello..." />
      <Image src={Meet} alt="trello..." />
      <Image src={Zoom} alt="trello..." />
    </ApplicationIcon>
    <ApplicationName>
      <Header>Trello</Header>
      <Header>Google Meet</Header>
      <Header>Zoom</Header>
    </ApplicationName>
    <IconWrapper>
      <Image src={TrelloIcon} alt="icon" />
      <Image src={MeetIcon} alt="icon" />
      <Image src={ZoomIcon} alt="icon" />
    </IconWrapper>
    <FilterWrapper>
      <Toggle />
      <Toggle />
      <Toggle />
    </FilterWrapper>
  </ApplicationWrapper>
)

export default Application
