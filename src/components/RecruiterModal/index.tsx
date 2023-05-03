import { Tabs } from 'antd'

import BasicInformation from 'components/BasicInformation'
import Summary from 'components/Summary'
import Interviewer from 'components/InterviewerModal'

import Jane from 'assets/images/Jane.png'
import Dot from 'assets/images/subDot.png'

import {
  MainContainer,
  ContainerWrapper,
  HeadingWrapper,
  ProfileImage,
  PersonHeading,
  DataHeading,
  MainHeading,
  SubHeading,
  LineWrapper,
  NameWrapper,
  TabWrapper,
} from 'styles/Deatils'

const { TabPane } = Tabs
const handleChange = (key: string) => key

interface ICloseModal {
  hideModal?: (value: boolean) => void
}

const Details: React.FC<ICloseModal> = () => (
  <MainContainer>
    <ContainerWrapper>
      <HeadingWrapper>
        <ProfileImage src={Jane} />
        <NameWrapper>
          <PersonHeading>Jane Cooper </PersonHeading>
          <DataHeading>
            <MainHeading>Recruitment</MainHeading>
            <LineWrapper src={Dot} />
            <SubHeading>Sr. Recruiter</SubHeading>
          </DataHeading>
        </NameWrapper>
      </HeadingWrapper>
      <TabWrapper>
        <Tabs defaultActiveKey="1" onChange={handleChange}>
          <TabPane className="tab" tab="Details" key="1">
            <BasicInformation />
          </TabPane>
          <TabPane tab="Summary" key="2">
            <Summary />
          </TabPane>
          <TabPane tab="Interviews" key="3">
            <Interviewer />
          </TabPane>
        </Tabs>
      </TabWrapper>
    </ContainerWrapper>
  </MainContainer>
)

export default Details
