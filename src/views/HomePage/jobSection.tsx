import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Main, MainHeading, Para, Heading, Box, Img, Paragraph, Card } from 'styles/HomePage/jobSection'
import { ButtonWrapper } from 'styles/Navbar'
import { jobsData } from 'views/HomePage/data'
import Button from 'components/Button'
import { JobsRoute } from 'constants/routes'
interface IJobProps {
  jobRef: React.RefObject<HTMLDivElement>
}

const jobs = ({ jobRef }: IJobProps) => {
  const navigate = useNavigate()

  return (
    <Container ref={jobRef}>
      <Main>
        <MainHeading>Jobs Available in 70+ categories</MainHeading>
        <Para>Find a job by the categories below.</Para>
      </Main>
      <Card>
        {jobsData.map((e, index) => (
          <Box key={index}>
            <Img src={e.src} alt="human" />
            <Heading>{e.heading} </Heading>
            <Paragraph> {e.Paragraph}</Paragraph>
          </Box>
        ))}
      </Card>
      <ButtonWrapper>
        <Button label=" View more" handleClick={() => navigate(JobsRoute.path)} />
      </ButtonWrapper>
    </Container>
  )
}

export default jobs
