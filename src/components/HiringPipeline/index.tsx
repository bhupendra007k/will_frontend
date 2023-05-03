import PipelineTable from 'components/AdminComponents/HiringPipelineTable'

import Person from 'assets/images/Jane.png'
import Interviewer from 'assets/images/PersonThree.png'
import Send from 'assets/images/send.png'

import {
  MainWrapper,
  FormWrapper,
  Form,
  ButtonWrapper,
  Button,
  RecruiterWrapper,
  ImageIcon,
  FeedbackWrapper,
  FeedbackContainer,
  Image,
  Text,
  DataWrapper,
  Date,
  Time,
  Count,
  DataText,
  MessageWrapper,
  Wrapper,
  InputWrapper,
  Input,
  SendButton,
} from 'styles/HiringPipeline'

import { DataTitle, FieldData, FieldWrapper, FormContainer, FormHeading } from 'styles/CandidateBasicInformation'

import { SendArrow } from 'styles/Message/SendMessage'

const Hiring = () => (
  <MainWrapper>
    <FormWrapper>
      <FormContainer>
        <FormHeading>Details</FormHeading>
        <Form>
          <FieldWrapper>
            <FieldData>
              <DataTitle>Current Status</DataTitle>
              <DataText>Active</DataText>
            </FieldData>
            <FieldData>
              <DataTitle>Stage</DataTitle>
              <DataText>Interview</DataText>
            </FieldData>
            <FieldData>
              <DataTitle>Applied Date</DataTitle>
              <DataText>25th May, 2022</DataText>
            </FieldData>
          </FieldWrapper>
          <FieldWrapper>
            <FieldData>
              <DataTitle>Recruiter</DataTitle>
              <RecruiterWrapper>
                <ImageIcon src={Person} alt="loading image" />
                <DataText>Esther Howard</DataText>
              </RecruiterWrapper>
            </FieldData>
            <FieldData>
              <DataTitle>Interviewer</DataTitle>
              <RecruiterWrapper>
                <ImageIcon src={Interviewer} alt="loading image" />
                <DataText>Robert Fox</DataText>
              </RecruiterWrapper>
            </FieldData>
          </FieldWrapper>
        </Form>
        <ButtonWrapper>
          <Button type="submit">Move to Next Stage</Button>
        </ButtonWrapper>
      </FormContainer>
      <FormContainer>
        <FormHeading>Feedback</FormHeading>
        <FeedbackWrapper>
          <FeedbackContainer>
            <Image src={Person} alt="loading image" />
            <FieldData>
              <DataWrapper>
                <DataText>Esther Howard</DataText>
                <Date>27 May, 2022</Date>
                <Time>03:34 PM</Time>
              </DataWrapper>
              <Text>Screening done sucessfully. All Data provide by user was correct.</Text>
              <Count>2 Reply</Count>
            </FieldData>
          </FeedbackContainer>
          <FeedbackContainer>
            <Image src={Person} alt="loading image" />
            <FieldData>
              <DataWrapper>
                <DataText>Robert Fox</DataText>
                <Date>28 May, 2022</Date>
                <Time>04:51 PM</Time>
              </DataWrapper>
              <Text>Screening done sucessfully. All Data provide by user was correct.</Text>
              <Count>Reply</Count>
            </FieldData>
          </FeedbackContainer>
        </FeedbackWrapper>
        <MessageWrapper>
          <Wrapper>
            <InputWrapper>
              <Input type="text" placeholder="Write Feedback here" />
              <SendButton>
                <SendArrow src={Send} alt="Sending feedback" />
              </SendButton>
            </InputWrapper>
          </Wrapper>
        </MessageWrapper>
      </FormContainer>
      <FormContainer>
        <FormHeading>Rating</FormHeading>
        <PipelineTable />
      </FormContainer>
    </FormWrapper>
  </MainWrapper>
)

export default Hiring
