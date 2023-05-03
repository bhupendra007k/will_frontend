import { Tabs } from 'antd'
import TabContent from 'components/PreOnBoarding/tabContent'
import AdminPublicLayout from 'components/Layouts/AdminLayouts/PublicLayout'
import StepperData from 'components/PreOnBoarding/stepperData'
import { MainWrapper, SectionMain } from 'styles/AdminJobPage/job'
import { ContentWrapper } from 'styles/AdminJobPage/preOnBoarding'
import 'antd/dist/antd.min.css'
import 'index.css'

const { TabPane } = Tabs

const PreOnBoarding = () => {
  return (
    <AdminPublicLayout>
      <MainWrapper>
        <SectionMain>
          <ContentWrapper>
            <Tabs className="Main" defaultActiveKey="0">
              {StepperData.map((e: any, index: number) => (
                <TabPane tab={e.heading} key={index}>
                  <TabContent heading={e.heading} key={index} />
                </TabPane>
              ))}
            </Tabs>
          </ContentWrapper>
        </SectionMain>
      </MainWrapper>
    </AdminPublicLayout>
  )
}

export default PreOnBoarding
