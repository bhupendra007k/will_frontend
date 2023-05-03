// import React, { useState, useEffect } from 'react'
import {
  MainWrapper,
  SideBar,
  SectionMain,
  SubWrapper,
  SearchBar,
  SearchImg,
  SearchMain,
  SeachInput,
  LocationInput,
  LocationContent,
  LocationImg,
  LocationSubContent,
  FindButton,
  FindImage,
  FindContent,
  Wrapper,
  DatabaseProgrammer,
  Filter,
  CardMain,
  Card,
  MainContent,
  LeftContent,
  LeftImage,
  SalaryContent,
  DeveloperWrapper,
  Developer,
  TeamWrapper,
  Team,
  DeveloperLocation,
  Location,
  ParaContent,
  JobDetails,
  JobsButton,
  Date,
  FullTime,
  ResetWrapper,
  FilterWrapper,
  FilterImg,
  FilterContentMain,
  LeftWrapper,
  RightWrapper,
} from 'styles/SearchJob/index'
import { searchJobData } from './searchJobData'
import FilterContent from 'components/FilterContent'
import SideNavbar from 'components/Sidenavbar'
import Taskbar from 'components/Taskbar'
import SearchInputImg from 'assets/images/searchInput.png'
import LocationPng from 'assets/images/place.png'
import FindImg from 'assets/images/findImg.png'
import FilterImgMain from 'assets/images/filter.png'
// import usePost from 'hooks/usePost'
// import { JOBS } from 'constants/apiRoutes'

interface IInput {
  offset: number
  limit: number
}

const SearchJob = () => {
  // const [data, setData] = useState([])
  // const { mutateAsync } = usePost()
  // const inputData = async () => {
  //   try {
  //     const payloads = {
  //       offset: 0,
  //       limit: 6,
  //     }
  //     const response = await mutateAsync({
  //       url: JOBS,
  //       payload: payloads,
  //     })

  //     setData(response.data)
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  // useEffect(() => {
  //   inputData()
  // }, [])

  return (
    <MainWrapper>
      <SideBar>
        <SideNavbar />
      </SideBar>
      <SectionMain>
        <Taskbar />
        <SubWrapper>
          <SearchBar>
            <SeachInput>
              <SearchImg src={SearchInputImg} alt="Search Icon" />
              <SearchMain type="search" placeholder="Search by Title, Company or any jobs keyword..." />
            </SeachInput>
            <LocationInput>
              <LocationContent>
                <LocationImg src={LocationPng} alt="Location Icon" />
                <LocationSubContent>Chandigarh, India</LocationSubContent>
              </LocationContent>
              <FindButton>
                <FindImage src={FindImg} alt="Search Icon" />
                <FindContent>FIND</FindContent>
              </FindButton>
            </LocationInput>
          </SearchBar>
          <Wrapper>
            <DatabaseProgrammer>
              <CardMain>
                {searchJobData.map((e, index) => (
                  <Card key={index}>
                    <MainContent>
                      <LeftContent>
                        <LeftImage src={e.src} alt="Company Image" />
                        <DeveloperWrapper>
                          <Developer>{e.Developer}</Developer>
                          <TeamWrapper>
                            <Team>{e.Heading}</Team>
                            <Location>
                              <DeveloperLocation src={e.src2} alt="Location" />
                              {e.Location}
                            </Location>
                          </TeamWrapper>
                        </DeveloperWrapper>
                      </LeftContent>
                      <SalaryContent>{e.Salary}</SalaryContent>
                    </MainContent>
                    <ParaContent>{e.Paragraph}</ParaContent>
                    <JobDetails>
                      <JobsButton>
                        <FullTime>{e.Remote}</FullTime>
                        <FullTime>{e.FullTime}</FullTime>
                        <FullTime>{e.Senior}</FullTime>
                      </JobsButton>
                      <Date>{e.Date}</Date>
                    </JobDetails>
                  </Card>
                ))}
              </CardMain>
            </DatabaseProgrammer>
            <Filter>
              <FilterWrapper>
                <ResetWrapper>
                  <LeftWrapper>
                    <FilterImg src={FilterImgMain}></FilterImg>
                    <FilterContentMain>FILTER</FilterContentMain>
                  </LeftWrapper>
                  <RightWrapper>Reset</RightWrapper>
                </ResetWrapper>
                <FilterContent></FilterContent>
              </FilterWrapper>
            </Filter>
          </Wrapper>
        </SubWrapper>
      </SectionMain>
    </MainWrapper>
  )
}

export default SearchJob
