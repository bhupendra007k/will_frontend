import {
  Wrapper,
  Section,
  MessageWrapper,
  SearchBar,
  Input,
  SearchIcon,
  Container,
  HeadingWrapper,
  Header,
  SubHeader,
  MessageContainer,
  Card,
  CardContainer,
  ImageWrapper,
  Image,
  ContentWrapper,
  ContentHeader,
  ContentSubHeader,
  DateWrapper,
  InboxWrapper,
  LeftHeader,
  HeadingContainer,
  SubHeading,
  RightHeader,
  StatusWrapper,
  Content,
  MessageSection,
  InboxContent,
  CompanyImage,
  InboxData,
  MessageParagraph,
  Heading,
  CandidateMessage,
  UserImage,
  UserData,
  DateContainer,
  Date,
  Divider,
  DropArrow,
  BackgroundImage,
  BottomImage,
} from 'styles/Message'

import Search from 'assets/images/searchVector.png'
import TCS from 'assets/images/tcs.png'
import Dots from 'assets/images/dots.png'
import Profile from 'assets/images/profileImage.png'
import Select from 'assets/images/dropDown.png'
import Ellipse from 'assets/images/bgImage.png'
import Gradient from 'assets/images/bottomBg.png'
import { messageData } from 'components/Message/messageData'
import SendMessage from 'components/Message/SendMessage'

const Messages = () => (
  <Wrapper>
    <BackgroundImage src={Ellipse} alt="image" />
    <BottomImage src={Gradient} alt="background" />
    <Section>
      <MessageWrapper>
        <SearchBar>
          <Input type="text" placeholder="Find person,company here..."></Input>
          <SearchIcon>
            <img src={Search} alt="search" />
          </SearchIcon>
        </SearchBar>
        <Container>
          <HeadingWrapper>
            <Header>Messages</Header>
            <SubHeader>
              Inbox
              <DropArrow src={Select} alt="" />
            </SubHeader>
          </HeadingWrapper>
          <MessageContainer>
            {messageData.map((e, index) => (
              <Card key={index}>
                <CardContainer>
                  <ImageWrapper>
                    <Image src={e.src} alt=""></Image>
                  </ImageWrapper>
                  <ContentWrapper>
                    <ContentHeader>{e.title}</ContentHeader>
                    <ContentSubHeader>{e.subtitle}</ContentSubHeader>
                  </ContentWrapper>
                  <DateWrapper>{e.date}</DateWrapper>
                </CardContainer>
              </Card>
            ))}
          </MessageContainer>
        </Container>
      </MessageWrapper>
      <InboxWrapper>
        <HeadingWrapper>
          <LeftHeader>
            <ImageWrapper>
              <Image src={TCS} alt="companyimage"></Image>
            </ImageWrapper>
            <HeadingContainer>
              <Header>Maximoz Team</Header>
              <SubHeading>Senior Programmer</SubHeading>
            </HeadingContainer>
          </LeftHeader>
          <RightHeader>
            <Image src={Dots} alt="optons"></Image>
          </RightHeader>
        </HeadingWrapper>
        <StatusWrapper>
          <Content>You applied to this position on March 10, 2022</Content>
        </StatusWrapper>
        <MessageSection>
          <DateContainer>
            <Divider></Divider>
            <Date>14 March</Date>
            <Divider></Divider>
          </DateContainer>
          <InboxContent>
            <CompanyImage src={TCS} alt="image" />
            <InboxData>
              <Heading>Maximoz Team</Heading>
              <MessageParagraph>
                Hello Shivam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </MessageParagraph>
            </InboxData>
          </InboxContent>
          <CandidateMessage>
            <UserImage src={Profile} alt="image" />
            <UserData>
              <Heading>Maximoz Team</Heading>
              <MessageParagraph>
                Hello Shivam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </MessageParagraph>
            </UserData>
          </CandidateMessage>
        </MessageSection>
        <SendMessage />
      </InboxWrapper>
    </Section>
  </Wrapper>
)

export default Messages
