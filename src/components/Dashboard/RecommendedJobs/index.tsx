import React from 'react'
import {
  JobsContainer,
  MainCard,
  SubCard,
  JobContent,
  ContentLeft,
  ContentRight,
  ContentSubHeading,
  SalaryContent,
  ContentPara,
  CardButton,
  LocationContent,
  JobHeading,
  ContainerRight,
  SliderImage,
  StatusWrapper,
  CompanyImage,
} from 'styles/Dashboard/RecommendedJobs'
import { Header, ContainerSubHeading, ArrowImage } from 'styles/Dashboard/Meetings'
import BackArrow from 'assets/images/arrowBack.png'
import Slider from 'assets/images/sliderIndicator.png'
import { job } from 'views/Dashboard/jobData'

const Jobs = () => {
  return (
    <>
      <JobsContainer>
        <Header>
          <JobHeading>Recommended Jobs</JobHeading>
          <ContainerRight>
            <SliderImage src={Slider} alt="slider"></SliderImage>
            <ContainerSubHeading>
              View More
              <ArrowImage src={BackArrow} alt="arrow"></ArrowImage>
            </ContainerSubHeading>
          </ContainerRight>
        </Header>
        <MainCard>
          {job.map((e, index) => (
            <SubCard key={index}>
              <JobContent>
                <ContentLeft>{e.heading}</ContentLeft>
                <div className="header">
                  <div className="salary">
                    <ContentSubHeading>{e.subheading}</ContentSubHeading>
                    <SalaryContent>{e.salary}</SalaryContent>
                  </div>
                  <ContentRight>
                    <CompanyImage src={e.src} alt="image"></CompanyImage>
                  </ContentRight>
                </div>
                <ContentPara>{e.paragraph}</ContentPara>
                <StatusWrapper>
                  <CardButton>{e.button}</CardButton>
                  <LocationContent>{e.location}</LocationContent>
                </StatusWrapper>
              </JobContent>
            </SubCard>
          ))}
        </MainCard>
      </JobsContainer>
    </>
  )
}

export default Jobs
