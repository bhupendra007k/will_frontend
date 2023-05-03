import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Container,
  ContainerTop,
  LeftContainer,
  MainHeading,
  ContentParagraph,
  Para,
  RightContainer,
  ImageContainer,
  JobSectionImage,
  LeftSideTwo,
  JobHeading,
  Paragraph,
  Content,
  Input,
  InputContainer,
  InputContainerTwo,
  LocationConatiner,
  LocationIcon,
  InputContainerThree,
  JobContainer,
  JobIcon,
  SalaryContainer,
  SalaryIcon,
  SearchButton,
  InformationWrapper,
  ParagraphOne,
  GradientWrapper,
} from 'styles/HomePage/latestJobs'
import Jobs from 'assets/images/jobs.png'
import Salary from 'assets/images/salary.png'
import Tele from 'assets/images/tele.png'
import Search from 'assets/images/search.png'
import Location from 'assets/images/location.png'
import JobList from 'components/JobList/jobList'
import Photo from 'assets/images/ellpse2.png'
import usePost from 'hooks/usePost'
import { JOBS } from 'constants/apiRoutes'
interface IInputs {
  offset: number
  limit: number
}
const LatestJobs = () => {
  const [data, setData] = useState([])
  const location = useLocation()
  const { mutateAsync } = usePost()
  const inputData = async () => {
    try {
      const queryParameter = new URLSearchParams(location.search)
      const keyword = queryParameter.get('keyword')

      console.log('keyword:-', keyword)
      const payloads = {
        offset: 0,
        limit: 6,
        keywords: ['Devops', 'Engineer'],
      }
      const response = await mutateAsync({
        url: JOBS,
        payload: payloads,
      })

      setData(response.data)

      console.log('response*****==', response)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    inputData()
  }, [])

  console.log(data)

  return (
    <Container>
      <GradientWrapper>
        <img src={Photo} />
      </GradientWrapper>
      <ContainerTop>
        <InformationWrapper>
          <LeftContainer>
            <MainHeading>Find New Jobs for Your Next Carrier</MainHeading>
            <ContentParagraph>
              <ParagraphOne>
                With WIL Hiring you can search millions of jobs online to find the next step in your career. With tools
                for job search, resumes, company reviews and more….
              </ParagraphOne>
              <Para>
                Search latest job openings online including IT, Sales, Banking, Fresher, Walk-ins, Part time, Govt
                jobs,etc. Post your resume to apply.
              </Para>
            </ContentParagraph>
          </LeftContainer>
        </InformationWrapper>
        <RightContainer>
          <ImageContainer>
            <JobSectionImage src={Jobs} />
          </ImageContainer>
        </RightContainer>
      </ContainerTop>
      <LeftSideTwo>
        <JobHeading>Latest Job Lists</JobHeading>
        <Paragraph>Find list of available positions in different company.</Paragraph>
        <Content>
          <InputContainer>
            <div>
              <img src={Search} alt="" />
            </div>
            <Input type="text" placeholder="Job Tittle, Company, or Anything" className="Title"></Input>
          </InputContainer>
          <InputContainerTwo>
            <LocationConatiner>
              <LocationIcon>
                <img src={Location} alt="" />
              </LocationIcon>
              <input type="text" placeholder="Location" className="Location" />
            </LocationConatiner>
          </InputContainerTwo>
          <InputContainerThree>
            <JobContainer>
              <JobIcon>
                <img src={Tele} alt="" />
              </JobIcon>
              <input type="text" placeholder="Job Type" className="type" />
            </JobContainer>
          </InputContainerThree>
          <SalaryContainer>
            <SalaryIcon>
              <img src={Salary} alt="" />
            </SalaryIcon>
            <input type="text" placeholder="Salary Range" className="salary" />
          </SalaryContainer>
          <SearchButton onClick={inputData}>Search</SearchButton>
        </Content>
      </LeftSideTwo>
      <JobList jobData={data} />
    </Container>
  )
}

export default LatestJobs
