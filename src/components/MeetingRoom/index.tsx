import {
  Section,
  Wrapper,
  CalendarWrapper,
  Container,
  DataWrapper,
  HeadingWrapper,
  InterviewWrapper,
  TimeWrapper,
  DayWrapper,
  TimeContainer,
  InterviewContainer,
  Paragraph,
  DetailedWrapper,
  ImageIcon,
  Heading,
  InterviewScheduleContainer,
  InterviewRoundContainer,
  EditWrapper,
  DetailWrapper,
  RoundWrapper,
  UserIcon,
  NameWrapper,
  InterviewTimeContainer,
  InterviewData,
} from 'styles/MeetingRoom'
import Trello from 'assets/images/trello.png'
import Meet from 'assets/images/gMeet.png'
import Zoom from 'assets/images/zoom.png'
import { DeleteOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import Application from 'components/MeetingRoom/MeetApplication'

const Meeting = () => (
  <Section>
    <Wrapper>
      <CalendarWrapper></CalendarWrapper>
      <Container>
        <DataWrapper>
          <HeadingWrapper>Calendar</HeadingWrapper>
          <Application />
        </DataWrapper>
        <InterviewWrapper>
          <TimeWrapper>
            <DayWrapper>Yesterday</DayWrapper>
          </TimeWrapper>
          <TimeWrapper>
            <TimeContainer>11:00 AM</TimeContainer>
            <InterviewContainer>
              <ImageIcon src={Trello} alt="trello..." />
              <DetailedWrapper>
                <Heading>Personal Interview</Heading>
                <Paragraph>11:00AM - 12:00PM</Paragraph>
              </DetailedWrapper>
            </InterviewContainer>
            <InterviewTimeContainer>
              <ImageIcon src={Trello} alt="trello..." />
              <DetailedWrapper>
                <Heading>Personal Interview</Heading>
                <Paragraph>11:30AM - 12:30PM</Paragraph>
              </DetailedWrapper>
            </InterviewTimeContainer>
          </TimeWrapper>
          <TimeWrapper>
            <TimeContainer>12:00 PM</TimeContainer>
            <InterviewScheduleContainer>
              <ImageIcon src={Meet} alt="trello..." />
              <DetailedWrapper>
                <Heading>Tech Interview</Heading>
                <Paragraph>12:00PM - 01:00PM</Paragraph>
              </DetailedWrapper>
            </InterviewScheduleContainer>
          </TimeWrapper>
          <TimeWrapper>
            <TimeContainer>01:00 PM</TimeContainer>
            <InterviewRoundContainer>
              <EditWrapper>
                <DeleteOutlined />
                <FormOutlined />
              </EditWrapper>
              <RoundWrapper>
                <ImageIcon src={Zoom} alt="trello..." />
                <DetailWrapper>
                  <Heading>HR Interview</Heading>
                  <Paragraph>1:00PM - 2:00PM</Paragraph>
                </DetailWrapper>
              </RoundWrapper>
              <NameWrapper>
                <UserIcon>
                  <UserOutlined />
                </UserIcon>
                <Heading>John Doe</Heading>
              </NameWrapper>
            </InterviewRoundContainer>
            <InterviewData>
              <EditWrapper>
                <DeleteOutlined />
                <FormOutlined />
              </EditWrapper>
              <RoundWrapper>
                <ImageIcon src={Meet} alt="trello..." />
                <DetailWrapper>
                  <Heading>HR Interview</Heading>
                  <Paragraph>1:30PM - 2:00PM</Paragraph>
                </DetailWrapper>
              </RoundWrapper>
              <NameWrapper>
                <UserIcon>
                  <UserOutlined />
                </UserIcon>
                <Heading>John Doe</Heading>
              </NameWrapper>
            </InterviewData>
          </TimeWrapper>
          <TimeWrapper>
            <DayWrapper>Tomorrow</DayWrapper>
          </TimeWrapper>
        </InterviewWrapper>
      </Container>
    </Wrapper>
  </Section>
)

export default Meeting
