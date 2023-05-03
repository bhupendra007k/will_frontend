import {
  MainSection,
  SideBar,
  Wrapper,
  Container,
  TitleWrapper,
  DesignationWrapper,
  JobTitle,
  JobProfile,
  DescriptionWrapper,
  CategoryWrapper,
} from 'styles/JobDetails'
import AdminSideNavbar from 'components/AdminSideNavBar'
import Taskbar from 'components/Taskbar'
import { jobDetailData } from 'components/JobDetails/detailsData'
import 'antd/dist/antd.min.css'
import { Tabs } from 'antd'
import Candidates from 'components/AppliedCandidate'
import JobsDetailsComponent from 'components/JobDetailsComponent'
const { TabPane } = Tabs

const onChange = (key: any) => {
  console.log(key)
}
const JobDetails = () => {
  return (
    <MainSection>
      <SideBar>
        <AdminSideNavbar />
      </SideBar>
      <Wrapper>
        <Taskbar />
        <Container>
          <TitleWrapper>
            {jobDetailData.map((e, index) => (
              <DesignationWrapper key={index}>
                <JobTitle>{e.developer}</JobTitle>
                <JobProfile>{e.type}</JobProfile>
              </DesignationWrapper>
            ))}
          </TitleWrapper>
          <DescriptionWrapper>
            <CategoryWrapper>
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Job Details" key="1">
                  <JobsDetailsComponent />
                </TabPane>
                <TabPane tab="Candidates" key="2">
                  <Candidates />
                </TabPane>
              </Tabs>
            </CategoryWrapper>
          </DescriptionWrapper>
        </Container>
      </Wrapper>
    </MainSection>
  )
}

export default JobDetails
