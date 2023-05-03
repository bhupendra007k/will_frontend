import { Tabs } from 'antd'

import CandidateInformation from 'components/CandidateBasicInformation'
import Resume from 'components/Resume'
import Hiring from 'components/HiringPipeline'
import Interviewer from 'components/InterviewerModal'

import User from 'assets/images/user.png'
import Star from 'assets/images/ratingStar.png'
import {
  Container,
  ProfileWrapper,
  UserImage,
  ProfileData,
  UserName,
  UserProfile,
  MainWrapper,
  RatingWrapper,
  RateText,
  RateImage,
  CategoryWrapper,
  MainContainer,
  Wrapper,
  ClosingTab,
  ProfileContainer,
  DataContainer,
  BasicData,
} from 'styles/ProfileModal'

const { TabPane } = Tabs

const hiringHandler = (key: any) => {
  console.log(key)
}

const ProfileModal = ({ setModal }: any) => {
  const closeModal = () => {
    setModal(false)
  }

  return (
    <MainContainer>
      <Wrapper>
        <MainWrapper>
          <ProfileContainer>
            <Container>
              <ProfileWrapper>
                <UserImage src={User} alt="user" />
              </ProfileWrapper>
              <DataContainer>
                <ProfileData>
                  <UserName>John Doe</UserName>
                  <UserProfile>
                    Design Team <sup>.</sup> Sr Product Designer
                  </UserProfile>
                </ProfileData>
                <RatingWrapper>
                  <RateText>4.0</RateText>
                  <RateImage src={Star} alt="rate" />
                </RatingWrapper>
              </DataContainer>
              <ClosingTab onClick={closeModal}>X</ClosingTab>
            </Container>
          </ProfileContainer>
          <CategoryWrapper>
            <Tabs defaultActiveKey="1" onChange={hiringHandler}>
              <TabPane className="tab-pane" tab="Details" key="1">
                <BasicData>
                  <CandidateInformation />
                </BasicData>
              </TabPane>
              <TabPane className="tab-pane" tab="Resume" key="2">
                <Resume />
              </TabPane>
              <TabPane className="tab-pane" tab="Hiring Pipeline" key="3">
                <Hiring />
              </TabPane>
              <TabPane className="tab-pane" tab="Interviews" key="4">
                <Interviewer />
              </TabPane>
            </Tabs>
          </CategoryWrapper>
        </MainWrapper>
      </Wrapper>
    </MainContainer>
  )
}

export default ProfileModal
