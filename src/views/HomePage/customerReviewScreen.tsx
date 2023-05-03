import React from 'react'
import {
  Section,
  MainHeading,
  FeedbackContainer,
  FeedbackColumnLeft,
  ImageSection,
  Image,
  CommaImage,
  ContentContainer,
  ContentHeading,
  ContentSubHeading,
  FeedbackColumnMiddle,
  PersonImage,
  CommaIcon,
  ContentParagraph,
  ParaHeading,
  ParaSubHeading,
  FeedbackColumnRight,
  ImageIcon,
  CommaImageIcon,
  ReviewContainer,
  ReviewHeading,
  ReviewSubHeading,
  ArrowContainer,
  ArrowImage,
} from 'styles/HomePage/reviewSection'
import Person1 from 'assets/images/person1.png'
import Person2 from 'assets/images/person2.png'
import Person3 from 'assets/images/person3.png'
import Comma from 'assets/images/comma.png'
import Arrow1 from 'assets/images/arrow1.png'
import Arrow2 from 'assets/images/arrow2.png'
interface ICustomerProps {
  customerRef: React.RefObject<HTMLDivElement>
}

const Customer = ({ customerRef }: ICustomerProps) => {
  return (
    <Section ref={customerRef}>
      <MainHeading> What Does Our Beloved Customers Say? </MainHeading>
      <FeedbackContainer>
        <FeedbackColumnLeft>
          <ImageSection>
            <Image src={Person1} alt="userimage"></Image>
            <CommaImage src={Comma} alt="quotation"></CommaImage>
          </ImageSection>
          <ContentContainer>
            “Wits is a great platform for anyone looking for work. Very simple, clear, and reliable. Thank you so much
            Wits!”
          </ContentContainer>
          <ContentHeading>Shireen Athrus</ContentHeading>
          <ContentSubHeading>Marketing Team at Sony</ContentSubHeading>
        </FeedbackColumnLeft>
        <FeedbackColumnMiddle>
          <ImageSection>
            <PersonImage src={Person2} alt="profile"></PersonImage>
            <CommaIcon src={Comma} alt="comma"></CommaIcon>
          </ImageSection>
          <ContentParagraph>
            “This platform is amazing! You can find job and applied whenever and wherever you want. Thank you for
            helping me find my dream job as UI/UX at Google”
          </ContentParagraph>
          <ParaHeading>Sheila Addara</ParaHeading>
          <ParaSubHeading>UI/UX Designer at Google</ParaSubHeading>
        </FeedbackColumnMiddle>
        <FeedbackColumnRight>
          <ImageSection>
            <ImageIcon src={Person3} alt="image"></ImageIcon>
            <CommaImageIcon src={Comma} alt="symbol"></CommaImageIcon>
          </ImageSection>
          <ReviewContainer>
            “With Wits, finding a job has never been easier. You can find a variety of jobs from companies around the
            world. They are very trusted”
          </ReviewContainer>
          <ReviewHeading>Antonio Gabriel</ReviewHeading>
          <ReviewSubHeading>IT Consultan at Huawei</ReviewSubHeading>
        </FeedbackColumnRight>
      </FeedbackContainer>
      <ArrowContainer>
        <ArrowImage>
          <img src={Arrow1} alt="Arrow1"></img>
          <img src={Arrow2} alt="Arrow2"></img>
        </ArrowImage>
      </ArrowContainer>
    </Section>
  )
}

export default Customer
