import Calendar from 'assets/images/calendar.png'
import { ActivityHeading, LogWrapper, CalenderWrapper, CalenderImage, CalenderDate } from 'styles/Summary'

const Activity = () => {
  ;<LogWrapper>
    <ActivityHeading>Activity Log</ActivityHeading>
    <CalenderWrapper>
      <CalenderImage src={Calendar} />
      <CalenderDate>Apr 15-Apr 20</CalenderDate>
    </CalenderWrapper>
  </LogWrapper>
}

export default Activity
