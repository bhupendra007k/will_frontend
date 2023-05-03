import Avatar from 'assets/images/Avatar.png'
import {
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
} from 'styles/CandidateModal'

const CandidateProfile = () => {
  return (
    <>
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
    </>
  )
}

export default CandidateProfile
