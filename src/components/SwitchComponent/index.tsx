import { Tabs } from 'antd'
import List from 'assets/images/listImg.png'
import Group from 'assets/images/Group 2.png'
import {
  ViewWrapper,
  ListView,
  View,
  CountWrapper,
  CountHeading,
  CountNumber,
  ViewsWrapper,
} from 'styles/SwitchComponent'

const { TabPane } = Tabs

const Switch = () => {
  return (
    <ViewWrapper>
      <CountWrapper>
        <CountHeading>Total Candidate:</CountHeading>
        <CountNumber>22</CountNumber>
      </CountWrapper>
      <ViewsWrapper>
        <ListView>
          <img src={List} alt="loading" />
        </ListView>
        <View>
          <img src={Group} alt="loading" />
        </View>
      </ViewsWrapper>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Hiring Pipeline" key="1"></TabPane>
          <TabPane tab="Pre-Onboarding" key="2"></TabPane>
        </Tabs>
      </div>
    </ViewWrapper>
  )
}

export default Switch
