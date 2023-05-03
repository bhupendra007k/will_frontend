import React from 'react'
import {
  ActivitiesContainer,
  ProfileContainer,
  NameHeading,
  Paragraph,
  RecentActivitiesContainer,
  Head,
  RecentActivitiesContent,
  ActivitiesContentContainer,
  ApplicationImage,
  ParagraphContent,
  ActivitiesContentContainerLast,
  ScrollIcon,
  ScrollWrapper,
} from 'styles/Dashboard/Profile'
import Applictaion from 'assets/images/applicationIcon.png'
import Arrow from 'assets/images/downArrow.png'
import User from 'components/Avatar'

interface IProfile {
  profileData: any
}

const ProfileSection: React.FC<IProfile> = ({ profileData }: IProfile) => {
  return (
    <ActivitiesContainer>
      <ProfileContainer>
        <User displayProfile={profileData} />
        <NameHeading>{profileData?.name}</NameHeading>
        <Paragraph>UI/UX Designer</Paragraph>
      </ProfileContainer>
      <RecentActivitiesContainer>
        <Head>Recent Activities</Head>
        <RecentActivitiesContent>
          <ActivitiesContentContainer>
            <ApplicationImage src={Applictaion} alt="application"></ApplicationImage>
            <ParagraphContent>
              Your application has accepted in <b> 3 Vacancy</b>
              <p className="time">12h ago</p>
            </ParagraphContent>
          </ActivitiesContentContainer>
          <ActivitiesContentContainer>
            <ApplicationImage src={Applictaion} alt="application"></ApplicationImage>
            <ParagraphContent>
              Your application has accepted in <b> 3 Vacancy</b>
              <p className="time">12h ago</p>
            </ParagraphContent>
          </ActivitiesContentContainer>
          <ActivitiesContentContainer>
            <ApplicationImage src={Applictaion} alt="application"></ApplicationImage>
            <ParagraphContent>
              Your application has accepted in <b> 3 Vacancy</b>
              <p className="time">12h ago</p>
            </ParagraphContent>
          </ActivitiesContentContainer>
          <ActivitiesContentContainer>
            <ApplicationImage src={Applictaion} alt="application"></ApplicationImage>
            <ParagraphContent>
              Your application has accepted in <b> 3 Vacancy</b>
              <p className="time">12h ago</p>
            </ParagraphContent>
          </ActivitiesContentContainer>
          <ActivitiesContentContainerLast>
            <ApplicationImage src={Applictaion} alt="application"></ApplicationImage>
            <ParagraphContent>
              Your application has accepted in <b> 3 Vacancy</b>
              <p className="time">12h ago</p>
            </ParagraphContent>
          </ActivitiesContentContainerLast>
        </RecentActivitiesContent>
        <ScrollWrapper>
          <ScrollIcon src={Arrow} alt="arrow"></ScrollIcon>
        </ScrollWrapper>
      </RecentActivitiesContainer>
    </ActivitiesContainer>
  )
}

export default ProfileSection
