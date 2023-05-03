import PublicLayout from 'components/Layouts/publicLayout'
import Image from 'assets/images/mainimg.png'
import Tick from 'assets/images/tick.jpg'
import Bg from 'assets/svg/requiremment-wrapper-img.svg'
import MainImg from 'assets/images/aboutImg.jpg'
import {
  Section,
  SectionWrapper,
  Background,
  CircleImg,
  FrontEndContent,
  FrontContent,
  UpdatedContent,
  JackContent,
  CityContent,
  Salary,
  FullTime,
  Content,
  JobResponsibilty,
  JobResponsibilityText,
  JobRequirements,
  JobRequirementsText,
  ContentText,
  WrapperImg,
  Text,
  CarrierWrapper,
  CarrierLevel,
  CarrierText,
  SubContent,
  JackText,
  AboutText,
  ImageWrapper,
} from 'styles/Requirement'
import Button from 'components/Button'

const RequirementPage = () => {
  const jobresponsiblilty = [
    {
      text: 'Develop new user-facing features',
    },
    {
      text: 'Build reusable code and libraries of future use',
    },
    {
      text: 'Design and ensure the technical feasibility of UI/UX Designs',
    },
    {
      text: 'Designs Optimize application for maximum speed and scalability',
    },
    {
      text: 'Assure that all user input is validated before submitting to back-end',
    },
    {
      text: 'Collaborate with other team members and stakeholders',
    },
    {
      text: 'Maintain update legacy code',
    },
  ]

  const jobrequire = [
    {
      text: 'Bachelor’s degree in Engineering: Computer/Information/ tech/or relevant',
    },
    {
      text: 'Preferably having experiences with two or more projects using Angular',
    },
    {
      text: 'Experience working with APIs, git and bitbucket',
    },
    {
      text: 'Having experience with PHP or .Net',
    },
  ]

  return (
    <div>
      <PublicLayout>
        <Section>
          <SectionWrapper>
            <CircleImg>
              <img src={Image}></img>
            </CircleImg>
            <Background>
              <img src={Bg}></img>
            </Background>
            <FrontEndContent>
              <FrontContent>Front End Engineer</FrontContent>
              <UpdatedContent>Updated 3 hours ago</UpdatedContent>
            </FrontEndContent>
            <JackContent>Jack Tech International</JackContent>
            <CityContent>Mumbai, India</CityContent>
            <Salary>Rs 10000- 30000/- per month</Salary>
            <FullTime>Fulltime</FullTime>
            <Content>
              <JobResponsibilty>
                <JobResponsibilityText>Jobs Responsibility</JobResponsibilityText>
                {jobresponsiblilty.map((item, index) => (
                  <ContentText key={index}>
                    <WrapperImg>
                      <img src={Tick}></img>
                    </WrapperImg>
                    <Text>{item.text}</Text>
                  </ContentText>
                ))}
              </JobResponsibilty>
              <JobRequirements>
                <JobRequirementsText>Jobs Requirements</JobRequirementsText>
                {jobrequire.map((item, index) => (
                  <ContentText key={index}>
                    <WrapperImg>
                      <img src={Tick}></img>
                    </WrapperImg>
                    <Text>{item.text}</Text>
                  </ContentText>
                ))}
              </JobRequirements>
            </Content>
            <CarrierWrapper>
              <CarrierLevel>
                <CarrierText>Career Level</CarrierText>
                <SubContent>Associate</SubContent>
                <CarrierText>Job Specialization</CarrierText>
                <SubContent>Engineering, Information Technology</SubContent>
                <CarrierText>About Company</CarrierText>
                <JackText>Jack Tech International</JackText>
                <AboutText>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                    Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                    in arcu cursus euismod.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                    Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                    in arcu cursus euismod.
                  </p>
                </AboutText>
              </CarrierLevel>
              <CarrierLevel>
                <CarrierText>Qualification</CarrierText>
                <SubContent>Bachelor’s Degree</SubContent>
                <CarrierText>Year of Experience</CarrierText>
                <SubContent>Min. 1 Year Experience, Fresh Graduates are welcome</SubContent>
                <ImageWrapper>
                  <img src={MainImg}></img>
                </ImageWrapper>
              </CarrierLevel>
            </CarrierWrapper>
            <CarrierWrapper>
              <CarrierLevel>
                <CarrierText>Company Size</CarrierText>
                <SubContent>50-100 Employees</SubContent>
                <CarrierText>Industry</CarrierText>
                <SubContent>Information Technology</SubContent>
                <Button label="Apply Now" />
              </CarrierLevel>
              <CarrierLevel>
                <CarrierText>Benefits</CarrierText>
                <SubContent>5 Day Working, Health Assurance, Annual Bonus</SubContent>
                <CarrierText>Website</CarrierText>
                <SubContent>www.jtechi.com</SubContent>
              </CarrierLevel>
            </CarrierWrapper>
          </SectionWrapper>
        </Section>
      </PublicLayout>
    </div>
  )
}

export default RequirementPage
