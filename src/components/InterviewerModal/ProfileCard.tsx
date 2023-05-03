import {
  FeedBack,
  ImageSection,
  SideBar,
  Wrapper,
  Candidate,
  Timming,
  Interviewer,
  Container,
  SubHeading,
  MainHeading,
} from 'styles/InterviewerModal/InterviewList'
import InterviewerIcon from 'assets/images/InterviewerIcon.png'
import { interviewerData } from 'components/InterviewerModal/interviewerData'
const InterviewStatus = () => (
  <Container>
    {interviewerData.map((e: any, index: any) => (
      <Wrapper key={index}>
        <SideBar />
        <ImageSection>
          <img src={InterviewerIcon} />
        </ImageSection>
        <Candidate>
          <MainHeading>{e.heading}</MainHeading>
          <SubHeading>{e.round}</SubHeading>
        </Candidate>
        <Timming>
          <MainHeading>{e.time}</MainHeading>
          <SubHeading> {e.hour}</SubHeading>
        </Timming>
        <Interviewer>
          <MainHeading>{e.title}</MainHeading>
          <SubHeading>{e.subtitle}</SubHeading>
        </Interviewer>
        <FeedBack>{e.feedback}</FeedBack>
      </Wrapper>
    ))}
  </Container>
)

export default InterviewStatus
