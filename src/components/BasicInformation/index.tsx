import {
  InformationWrapper,
  BasicInfoWrapper,
  BasicInfoHeading,
  InfoDataWrapper,
  LeftInformation,
  RightInformation,
  NameWrapper,
  Name,
  NameHeading,
  ProfessionalWrapper,
  SkillsWrapper,
  Skills,
  SkillsContainer,
  SkillHeading,
  SkillFeild,
  SkillFeildWrapper,
  SocialWrapper,
  CardWrapper,
  SiteContainer,
  MediaLogo,
  IconImg,
  LinkContainer,
  LinkWrapper,
  WebWrapper,
  SkillsHeading,
} from 'styles/BasicInformation'
import SocialData from './SocialData'

const BasicInformation = () => {
  return (
    <InformationWrapper>
      <BasicInfoWrapper>
        <BasicInfoHeading>Basic Information</BasicInfoHeading>
        <InfoDataWrapper>
          <LeftInformation>
            <NameWrapper>
              <Name>Name</Name>
              <NameHeading> Jane Cooper</NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name>Address</Name>
              <NameHeading> Recruiter Address, Recruiter City, 123456. </NameHeading>
            </NameWrapper>
          </LeftInformation>
          <RightInformation>
            <NameWrapper>
              <Name>E-Mail</Name>
              <NameHeading> Recruiter@email.com </NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name>Mobile Number</Name>
              <NameHeading>+91 0123456789 </NameHeading>
            </NameWrapper>
          </RightInformation>
        </InfoDataWrapper>
      </BasicInfoWrapper>
      <ProfessionalWrapper>
        <BasicInfoHeading>Professional Details</BasicInfoHeading>
        <InfoDataWrapper>
          <LeftInformation>
            <NameWrapper>
              <Name>Current Jov Title</Name>
              <NameHeading> Sr. Recruiter </NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name> Expected Salary </Name>
              <NameHeading>- </NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name> Experience In Years </Name>
              <NameHeading> 3 Years </NameHeading>
            </NameWrapper>
          </LeftInformation>
          <RightInformation>
            <NameWrapper>
              <Name> Highest Qualification </Name>
              <NameHeading> Bachelors of Business Administration </NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name> Current Salary</Name>
              <NameHeading> - </NameHeading>
            </NameWrapper>
            <NameWrapper>
              <Name> Additional Info </Name>
              <NameHeading> - </NameHeading>
            </NameWrapper>
          </RightInformation>
        </InfoDataWrapper>
        <SkillsWrapper>
          <Skills>Skills</Skills>
          <SkillFeildWrapper>
            <SkillsContainer>
              <SkillFeild>
                <SkillHeading>Programing</SkillHeading>
              </SkillFeild>
            </SkillsContainer>
            <SkillsContainer>
              <SkillFeild>
                <SkillHeading>Prototyping</SkillHeading>
              </SkillFeild>
            </SkillsContainer>
            <SkillsContainer>
              <SkillFeild>
                <SkillHeading>ui design</SkillHeading>
              </SkillFeild>
            </SkillsContainer>
          </SkillFeildWrapper>
        </SkillsWrapper>
        <WebWrapper>
          <SkillsHeading>On Social</SkillsHeading>

          <CardWrapper>
            {SocialData.map((e: any, index) => (
              <SocialWrapper key={index}>
                <SiteContainer>
                  <MediaLogo>
                    <IconImg src={e.src} alt="facebook" />
                  </MediaLogo>
                </SiteContainer>
                <LinkContainer>
                  <LinkWrapper>{e.heading}</LinkWrapper>
                </LinkContainer>
              </SocialWrapper>
            ))}
          </CardWrapper>
        </WebWrapper>
      </ProfessionalWrapper>
    </InformationWrapper>
  )
}

export default BasicInformation
