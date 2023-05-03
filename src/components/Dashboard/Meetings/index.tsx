import React from 'react'
import {
  Header,
  HeadingWrapper,
  CalendarContainer,
  Container,
  ImageSection,
  CalendarImage,
  SectionHeader,
  DateHeading,
  ImageIcon,
  CalendarContent,
  SectionHeading,
  CompanyImage,
  CompanyParagraph,
  Content,
  CompanyName,
  ArrowImage,
  ContainerSubHeading,
} from 'styles/Dashboard/Meetings'
import BackArrow from 'assets/images/arrowBack.png'
import { meetingData } from 'views/Dashboard/meetingData'

const Meetings = () => {
  return (
    <>
      <Header>
        <HeadingWrapper>{"Today's Meet"}</HeadingWrapper>
        <ContainerSubHeading>
          View more
          <ArrowImage src={BackArrow} alt="arrow"></ArrowImage>
        </ContainerSubHeading>
      </Header>
      <CalendarContainer>
        {meetingData.map((e, index) => (
          <CalendarContent key={index}>
            <Container>
              <ImageSection>
                <ImageIcon src={e.img} alt=""></ImageIcon>
                <ImageIcon src={e.src} alt=""></ImageIcon>
                <CalendarImage src={e.image} alt=""></CalendarImage>
              </ImageSection>
              <SectionHeader>
                <SectionHeading>{e.heading}</SectionHeading>
                <DateHeading>{e.subheading}</DateHeading>
              </SectionHeader>
            </Container>
            <Content>
              <CompanyImage src={e.icon} alt="circle"></CompanyImage>
              <CompanyName>{e.title}</CompanyName>
              <CompanyParagraph>{e.subTitle}</CompanyParagraph>
            </Content>
          </CalendarContent>
        ))}
      </CalendarContainer>
    </>
  )
}

export default Meetings
