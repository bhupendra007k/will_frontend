import Expand from 'components/ExpandComponent'
import ScheduleDate from 'components/InterviewerModal/ScheduleData'

import AddCircle from 'assets/svg/InCirclePlus'

import { AddInterview, BodyWrapper, Container, Header, InterviewCard, Navbar, Wrapper } from 'styles/InterviewerModal'

const Interviewer = () => (
  <Container>
    <Wrapper>
      <Navbar>
        <Header>Interview List</Header>
        <AddInterview>
          <AddCircle />
          <p>Add Interview</p>
        </AddInterview>
      </Navbar>
      <BodyWrapper>
        <ScheduleDate />
        <InterviewCard>
          <Expand />
        </InterviewCard>
        <ScheduleDate />
        <InterviewCard>
          <Expand />
        </InterviewCard>
      </BodyWrapper>
    </Wrapper>
  </Container>
)

export default Interviewer
