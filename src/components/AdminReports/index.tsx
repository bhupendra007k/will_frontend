import AdminPublicLayout from 'components/Layouts/AdminLayouts/PublicLayout'
import GraphData from 'components/GraphData'
import { BarChart } from 'components/graph'
import { MainWrapper, Wrapper, ActivityWrapper, SourceHead } from 'styles/AdminReports'
import { Section } from 'styles/RecruiterInfo'

import { DataContentWrapper, Month, MonthWrapper, SourcedWrapper, Week, WeekWrapper, Year } from 'styles/Summary'
import DateData from './data'

const Report = () => (
  <AdminPublicLayout>
    <Section>
      <MainWrapper>
        <Wrapper>
          <ActivityWrapper>
            <GraphData />
          </ActivityWrapper>
          {DateData.map((e: any, index: number) => (
            <ActivityWrapper key={index}>
              <DataContentWrapper>
                <SourcedWrapper>
                  <SourceHead>{e.sourceHead}</SourceHead>
                </SourcedWrapper>
                <WeekWrapper>
                  <Week>{e.week}</Week>
                  <MonthWrapper>
                    <Month>{e.month}</Month>
                  </MonthWrapper>
                  <Year>{e.year}</Year>
                </WeekWrapper>
              </DataContentWrapper>
              <BarChart />
            </ActivityWrapper>
          ))}
        </Wrapper>
      </MainWrapper>
    </Section>
  </AdminPublicLayout>
)

export default Report
