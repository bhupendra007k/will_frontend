import Graph from 'assets/images/Graph.png'
import Arrow from 'assets/images/arrow.png'
import RedGraph from 'assets/images/redGraph.png'
import DownArrow from 'assets/images/redArrow.png'
import Calender from 'assets/images/calendar.png'

import {
  GraphWrapper,
  NumberData,
  ContentWrapper,
  GraphFeild,
  GraphImage,
  DataWrapper,
  PercentData,
  PercentDataMain,
  ArrowImage,
  GraphHeading,
  DataBinder,
  LineWrapper,
  LeftContainer,
  RightContainer,
  MiddleContainer,
  VerticalLineWrapper,
  ActivityContent,
  CalenderWrapper,
  CalenderImage,
  CalenderDate,
} from 'styles/Summary'

const GraphData = () => (
  <GraphWrapper>
    <LeftContainer>
      <ActivityContent>Activity Log</ActivityContent>
      <DataBinder>
        <ContentWrapper>
          <NumberData>55</NumberData>
          <GraphFeild>
            <GraphImage src={Graph} />
            <DataWrapper>
              <PercentData>+ 10%</PercentData>
              <ArrowImage src={Arrow} />
            </DataWrapper>
          </GraphFeild>
        </ContentWrapper>
        <GraphHeading>Sourced Candidate</GraphHeading>
      </DataBinder>
      <LineWrapper />
      <DataBinder>
        <ContentWrapper>
          <NumberData>28</NumberData>
          <GraphFeild>
            <GraphImage src={RedGraph} />
            <DataWrapper>
              <PercentDataMain>+10%</PercentDataMain>
              <ArrowImage src={DownArrow} />
            </DataWrapper>
          </GraphFeild>
        </ContentWrapper>
        <GraphHeading>Interview Scheduled</GraphHeading>
      </DataBinder>
    </LeftContainer>
    <MiddleContainer>
      <VerticalLineWrapper />
      <VerticalLineWrapper />
    </MiddleContainer>
    <RightContainer>
      <CalenderWrapper>
        <CalenderImage src={Calender} />
        <CalenderDate>Apr 15 - Apr 20</CalenderDate>
      </CalenderWrapper>
      <DataBinder>
        <ContentWrapper>
          <NumberData>13</NumberData>
          <GraphFeild>
            <GraphImage src={Graph} />
            <DataWrapper>
              <PercentData>+ 10%</PercentData>
              <ArrowImage src={Arrow} />
            </DataWrapper>
          </GraphFeild>
        </ContentWrapper>
        <GraphHeading>Offered Candidate</GraphHeading>
      </DataBinder>
      <LineWrapper />
      <DataBinder>
        <ContentWrapper>
          <NumberData>24</NumberData>
          <GraphFeild>
            <GraphImage src={RedGraph} />
            <DataWrapper>
              <PercentDataMain>+ 10%</PercentDataMain>
              <ArrowImage src={DownArrow} />
            </DataWrapper>
          </GraphFeild>
        </ContentWrapper>
        <GraphHeading>Hired Candidate</GraphHeading>
      </DataBinder>
    </RightContainer>
  </GraphWrapper>
)

export default GraphData
