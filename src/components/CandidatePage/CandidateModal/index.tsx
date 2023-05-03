import { useNavigate } from 'react-router-dom'

import data from 'components/CandidatePage/CandidateModal/data'
import InputField from 'components/InputField'
import CandidateQualification from 'components/CandidatePage/CandidateQualification'
import AboutCandidate from 'components/CandidatePage/AboutCandidate'
import ViewDropdown from 'assets/images/ViewDropdown.png'
import SocialData from 'components/CandidatePage/CandidateSocialmedia/data'
import AnimatedMulti from 'components/CandidatePage/SkillTags'

import Cross from 'assets/images/Cross.png'
import Avatar from 'assets/images/Avatar.png'

import {
  MainContainer,
  SubContainer,
  AccountWrapper,
  AccountContainer,
  CrossContainer,
  CrossImage,
  Name,
  ProfileContainer,
  AvatarWrapper,
  AvatarImage,
  DataWrapper,
  UploadWrapper,
  RemoveWrapper,
  DataWrapperTwo,
  UploadHeading,
  RemoveHeading,
  ProfileParagraph,
  DataContainer,
  InformationContainer,
  InformationHeading,
  LineWrapper,
  BasicInfoContainer,
  QualificationWrapper,
  WebContainer,
  WebHeading,
  WebLine,
  SocialWrapper,
  SiteContainer,
  MediaLogo,
  LogoHeading,
  IconImg,
  LinkContainer,
  LinkWrapper,
  CrossImg,
  ViewWrapper,
  ViewHeading,
  ViewLogo,
  ViewImage,
  Card,
  SkillWrapper,
  SkillLine,
  SkillHeading,
  SkillTag,
  SkillLabel,
  TagWrapper,
  ChangesWrapper,
  CancelWrapper,
  CancelHeading,
  SaveWrapper,
  SaveHeading,
} from 'styles/CandidateModal'

interface ICloseModal {
  hideModal: (value: boolean) => void
}

const CandidateModal: React.FC<ICloseModal> = ({ hideModal }: ICloseModal) => {
  const navigate = useNavigate()
  const cancelFunction = () => {
    navigate('/candidateProfile')
  }

  return (
    <MainContainer>
      <SubContainer>
        <AccountWrapper>
          <AccountContainer> Account Setting</AccountContainer>
          <CrossContainer onClick={() => hideModal(false)}>
            <CrossImage src={Cross} alt="cross" />
          </CrossContainer>
        </AccountWrapper>
        <Name>Your Avatar</Name>
        <ProfileContainer>
          <AvatarWrapper>
            <AvatarImage src={Avatar} alt="avatar"></AvatarImage>
          </AvatarWrapper>
          <DataContainer>
            <DataWrapper>
              <UploadWrapper>
                <UploadHeading> Upload New</UploadHeading>
              </UploadWrapper>
              <RemoveWrapper>
                <RemoveHeading> Remove Profile</RemoveHeading>
              </RemoveWrapper>
            </DataWrapper>
            <DataWrapperTwo>
              <ProfileParagraph> Profile help your teammates recognize you in Unity.</ProfileParagraph>
            </DataWrapperTwo>
          </DataContainer>
        </ProfileContainer>
        <InformationContainer>
          <InformationHeading>Basic Information</InformationHeading>
          <LineWrapper />
        </InformationContainer>
        <div className="education">
          <BasicInfoContainer>
            <div>
              <InputField label="Your Name here" />
            </div>
            <div>
              <InputField label="Username" />
            </div>
            <div>
              <InputField label="Mobile Number" />
            </div>
            <div>
              <InputField label="Mail-Id " />
            </div>
            <div>
              <InputField label="Country" />
            </div>
            <div>
              <InputField label="City " />
            </div>
          </BasicInfoContainer>
          <QualificationWrapper>
            {data.map((e: any, index: any) => (
              <CandidateQualification
                key={index}
                heading={e.heading}
                logo={e.logo}
                title={e.title}
                startDate={e.startDate}
                endDate={e.endDate}
                city={e.city}
                country={e.country}
                edit={e.edit}
                deleteButton={e.deleteButton}
                add={e.add}
                image={e.image}
              />
            ))}
          </QualificationWrapper>
        </div>
        <AboutCandidate />
        <WebContainer>
          <WebHeading>On the Web</WebHeading>
          <WebLine />
        </WebContainer>
        <Card>
          {SocialData.map((e, index) => (
            <SocialWrapper key={index}>
              <SiteContainer>
                <MediaLogo>
                  <IconImg src={e.src} alt="facebook" />
                </MediaLogo>
                <LogoHeading>{e.heading}</LogoHeading>
              </SiteContainer>
              <LinkContainer>
                <LinkWrapper>{e.link}</LinkWrapper>
                <CrossImg src={Cross} alt="cross"></CrossImg>
              </LinkContainer>
            </SocialWrapper>
          ))}
        </Card>
        <ViewWrapper>
          <ViewHeading>View more</ViewHeading>
          <ViewLogo>
            <ViewImage src={ViewDropdown} alt="view"></ViewImage>
          </ViewLogo>
        </ViewWrapper>
        <SkillWrapper>
          <SkillHeading>Skills</SkillHeading>
          <SkillLine />
        </SkillWrapper>
        <TagWrapper>
          <SkillTag>
            <AnimatedMulti />
            <SkillLabel>Skills</SkillLabel>
          </SkillTag>
        </TagWrapper>
        <ChangesWrapper>
          <CancelWrapper>
            <CancelHeading onClick={cancelFunction}>Cancel</CancelHeading>
          </CancelWrapper>
          <SaveWrapper>
            <SaveHeading>Save</SaveHeading>
          </SaveWrapper>
        </ChangesWrapper>
      </SubContainer>
    </MainContainer>
  )
}

export default CandidateModal
