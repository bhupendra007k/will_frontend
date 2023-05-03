import { Tabs } from 'antd'

import BasicInformation from 'components/BasicInformation'
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
const onChange = (key: string) => key

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
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Details" key="1">
            <BasicInformation />
          </TabPane>
          <TabPane tab="Interviewers" key="2">
            <Interviewer />
          </TabPane>
        </Tabs>
      </TabWrapper>
    </ContainerWrapper>
  </MainContainer>
)

export default Details
