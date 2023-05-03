import { BarChart } from 'components/graph'
import GraphData from 'components/GraphData'
import dropDown from 'assets/images/dropDownButton.png'
import {
  ActivityWrapper,
  BarChartWrapper,
  SourcedWrapper,
  SourceHeading,
  DropImageWrapper,
  Container,
  WeekWrapper,
  Week,
  Month,
  Year,
  MonthWrapper,
  DataContentWrapper,
} from 'styles/Summary'
const Summary = () => {
  return (
    <ActivityWrapper>
      <Container>
        <GraphData />
      </Container>
      <BarChartWrapper>
        <DataContentWrapper>
          <SourcedWrapper>
            <SourceHeading>Sourced</SourceHeading>
            <DropImageWrapper src={dropDown} />
          </SourcedWrapper>
          <WeekWrapper>
            <Week>Week</Week>
            <MonthWrapper>
              <Month>Month</Month>
            </MonthWrapper>
            <Year>Year</Year>
          </WeekWrapper>
        </DataContentWrapper>
        <div>
          <BarChart />
        </div>
      </BarChartWrapper>
    </ActivityWrapper>
  )
}

export default Summary
