import SocialData from 'components/CandidateBasicInformation/socialData'

import {
  FormWrapper,
  Form,
  FormContainer,
  FormHeading,
  DataTitle,
  DataText,
  FieldWrapper,
  FieldData,
  SkillWrapper,
  HeadingWrapper,
  SkillData,
  SkillText,
  SocialMediaWrapper,
} from 'styles/CandidateBasicInformation'

import {
  SocialWrapper,
  CardWrapper,
  SiteContainer,
  MediaLogo,
  IconImg,
  LinkContainer,
  LinkWrapper,
} from 'styles/BasicInformation'

const CandidateInformation = () => (
  <FormWrapper>
    <FormContainer>
      <FormHeading>Basic Information</FormHeading>
      <Form className="basic_details">
        <FieldWrapper>
          <FieldData>
            <DataTitle>Name</DataTitle>
            <DataText>John Doe</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Origin</DataTitle>
            <DataText>Sourced</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Address</DataTitle>
            <DataText>Candidate address, Candidate City, 123456.</DataText>
          </FieldData>
        </FieldWrapper>
        <FieldWrapper>
          <FieldData>
            <DataTitle>E-mail</DataTitle>
            <DataText>candidate@email.com</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>E-mail</DataTitle>
            <DataText>+91 0123456789</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Website</DataTitle>
            <DataText>candidatewebsite.com</DataText>
          </FieldData>
        </FieldWrapper>
      </Form>
    </FormContainer>
    <FormContainer>
      <FormHeading>Professional Details</FormHeading>
      <Form>
        <FieldWrapper>
          <FieldData>
            <DataTitle>Current Job Title</DataTitle>
            <DataText>-</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Experience In Years</DataTitle>
            <DataText>3 Years</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Highest Qualification</DataTitle>
            <DataText>Bachelors In Designing</DataText>
          </FieldData>
        </FieldWrapper>
        <FieldWrapper>
          <FieldData>
            <DataTitle>Mobile Number</DataTitle>
            <DataText>+91 0123456789</DataText>
          </FieldData>
          <FieldData>
            <DataTitle>Additional Info</DataTitle>
            <DataText>-</DataText>
          </FieldData>
        </FieldWrapper>
      </Form>
      <SkillWrapper>
        <HeadingWrapper>Skills</HeadingWrapper>
        <SkillData>
          <SkillText>Programming</SkillText>
          <SkillText>Prototyping</SkillText>
          <SkillText>UI Design</SkillText>
          <SkillText>Researching</SkillText>
        </SkillData>
      </SkillWrapper>
      <SocialMediaWrapper>
        <CardWrapper>
          {SocialData.map((e: any, index: any) => (
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
      </SocialMediaWrapper>
    </FormContainer>
  </FormWrapper>
)

export default CandidateInformation
