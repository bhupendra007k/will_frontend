import { vacancyData } from 'components/JobDetails/detailsData'

import {
  DesignationWrapper,
  JobWrapper,
  JobHeading,
  JobName,
  DetailsWrapper,
  DetailContainer,
  Header,
  SubHead,
  DataWrapper,
  DataHeading,
  DataContent,
  DataContainer,
  VacancyWrapper,
  MainCard,
  TotalText,
  TotalVacancy,
  FilledText,
  FilledVacancy,
  ContentWrapper,
  ContentContainer,
} from 'styles/JobDetails'

const JobsDetailsComponent = () => {
  return (
    <div>
      <JobWrapper>
        <DesignationWrapper>
          <JobHeading>Job Title</JobHeading>
          <JobName>Senior Product Designer</JobName>
        </DesignationWrapper>
        <VacancyWrapper>
          {vacancyData.map((e, index) => (
            <MainCard key={index}>
              <ContentWrapper>
                <TotalText>{e.total}</TotalText>
                <TotalVacancy>{e.available}</TotalVacancy>
              </ContentWrapper>
              <ContentContainer>
                <FilledText>{e.filled}</FilledText>
                <FilledVacancy>{e.occupied}</FilledVacancy>
              </ContentContainer>
            </MainCard>
          ))}
        </VacancyWrapper>
      </JobWrapper>
      <DetailsWrapper>
        <DetailContainer>
          <Header>Experience:</Header>
          <SubHead>1-3 Years</SubHead>
        </DetailContainer>
        <DetailContainer>
          <Header>Annual Salary:</Header>
          <SubHead>3 to 5 Lacs Per Annum</SubHead>
        </DetailContainer>
        <DetailContainer>
          <Header>Location:</Header>
          <SubHead>Mohali(Remote)</SubHead>
        </DetailContainer>
      </DetailsWrapper>
      <DataWrapper>
        <DataContainer>
          <DataHeading>Job Description</DataHeading>
          <DataContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nunc mattis enim ut
            tellus elementum sagittis vitae et leo. Pulvinar pellentesque habitant morbi tristique senectus et netus et
            malesuada. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Sed sed risus pretium quam
            vulputate dignissim. Risus viverra adipiscing at in.
          </DataContent>
          <DataContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nunc mattis enim ut
            tellus elementum sagittis vitae et leo. Pulvinar pellentesque habitant morbi tristique senectus et netus et
            malesuada. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Sed sed risus pretium quam
            vulputate dignissim.
          </DataContent>
        </DataContainer>
        <DataContainer>
          <DataHeading>Responsibility:</DataHeading>
          <DataContent>
            <ul>
              <li> Ac ut consequat semper viverra nam libero.</li>
              <li>Ut etiam sit amet nisl purus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.</li>
              <li>Nisl suscipit adipiscing bibendum est ultricies integer. Bibendum est ultricies integer quis. </li>
              <li> Accumsan lacus vel facilisis volutpat est velit egestas dui.</li>
              <li> Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.</li>
            </ul>
          </DataContent>
        </DataContainer>
        <DataContainer>
          <DataHeading>Requirement:</DataHeading>
          <DataContent>
            <ul>
              <li> Lectus urna duis convallis convallis tellus id interdum velit laoreet.</li>
              <li> In arcu cursus euismod quis viverra nibh.</li>
              <li>Nam at lectus urna duis convallis convallis tellus.</li>
              <li>Pharetra vel turpis nunc eget lorem.</li>
            </ul>
          </DataContent>
        </DataContainer>
      </DataWrapper>
    </div>
  )
}

export default JobsDetailsComponent
