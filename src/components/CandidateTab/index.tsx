import { Tabs } from 'antd'
import CandidateTable from 'components/CandidateTable'
import SideNavbar from 'components/AdminSideNavBar'
import Taskbar from 'components/Taskbar'
import OnboardingTable from 'components/OnboardingTable'
import {
  MainContainer,
  DesignationCardContainer,
  DesignationCard,
  DesignationTitle,
  DesignationSubTitle,
  TableContainer,
  CandidateCountWrapper,
  MiscellaneousContainer,
  MainWrapper,
  TabContainer,
} from 'styles/CandidatesTab'

const { TabPane } = Tabs

const CandidatesTab = () => (
  <MainContainer>
    <SideNavbar />
    <MainWrapper>
      <Taskbar />
      <TableContainer>
        <DesignationCardContainer>
          <DesignationCard>
            <DesignationTitle>Senior Product Designer</DesignationTitle>
            <DesignationSubTitle>Design</DesignationSubTitle>
          </DesignationCard>
        </DesignationCardContainer>
        <TabContainer>
          <div>
            <MiscellaneousContainer>
              <CandidateCountWrapper>
                <div>Total Candidates:</div>
                <div>22</div>
              </CandidateCountWrapper>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Hiring Pipeline" key="1">
                  <CandidateTable />
                </TabPane>
                <TabPane tab="Pre-Onboarding" key="2">
                  <OnboardingTable />
                </TabPane>
              </Tabs>
            </MiscellaneousContainer>
          </div>
        </TabContainer>
      </TableContainer>
    </MainWrapper>
  </MainContainer>
)

export default CandidatesTab
