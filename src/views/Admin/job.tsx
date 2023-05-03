import { useForm } from 'react-hook-form'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { JobDetailRoute } from 'constants/routes'
import useGet from 'hooks/useGet'
import { jobData } from 'components/SelectBox/jobdata'
import Button from 'components/Button'
import SelectBox from 'components/SelectBox'
import { LoaderContext } from 'context/loader'
import { JobRoute } from 'constants/routes'
import Options from 'assets/images/threedots.png'

import {
  MainWrapper,
  SectionMain,
  ContentWrapper,
  PostedJobs,
  JobsContent,
  JobsContentSub,
  JobsContentSub2,
  CardWrapper,
  Card,
  CardContainer,
  Type,
  Developer,
  Position,
  TotalContainer,
  TotalLeftWrapper,
  TotalRightWrapper,
  TotalLeftContent,
  TotalRightContainer,
  TotalText,
  FilledText,
  ActiveContainer,
  ActiveText,
  ActiveContent,
  ActiveNumber,
  Details,
  OutlineWrapper,
  SubCard,
  CardData,
  DataWrapper,
} from 'styles/AdminJobPage/job'
import AdminPublicLayout from 'components/Layouts/AdminLayouts/PublicLayout'

const Job = () => {
  const { setLoader } = useContext(LoaderContext)
  const navigate = useNavigate()
  const { setValue, control } = useForm()

  const [allDatas, setData] = useState('')
  const argument = { key: 'userDetails', url: '/get-jobs-stats', token: true }

  const { refetch: fetchDetails, data, isLoading } = useGet(argument)

  useEffect(() => {
    fetchDetails()
  }, [])

  useEffect(() => {
    setValue('developer', allDatas)
  }, [allDatas])

  useEffect(() => {
    if (isLoading) setLoader(true)
    else setLoader(false)
  })

  return (
    <AdminPublicLayout>
      <MainWrapper>
        <SectionMain>
          <ContentWrapper>
            <DataWrapper>
              <PostedJobs>
                <JobsContent>
                  <JobsContentSub>Posted Jobs</JobsContentSub>
                  <JobsContentSub2>
                    <SelectBox defaultValue="Developer" data={jobData} setData={setData} control={control} />
                  </JobsContentSub2>
                </JobsContent>
                <Button label="Post a job" variant="post" handleClick={() => navigate(JobRoute.path)} />
              </PostedJobs>
              <CardWrapper>
                {data?.data?.map((e: any, index: number) => (
                  <Card key={index}>
                    <CardContainer>
                      <SubCard>
                        <CardData>
                          <Type>{e?.title}</Type>
                          <Developer>{e?.department}</Developer>
                        </CardData>
                        <OutlineWrapper>
                          <img src={Options} alt="option" />
                        </OutlineWrapper>
                      </SubCard>
                      <Position>Position:</Position>
                      <TotalContainer>
                        <TotalLeftWrapper>
                          <TotalLeftContent>
                            <TotalText>Total</TotalText>
                            <FilledText>{e?.opening}</FilledText>
                          </TotalLeftContent>
                        </TotalLeftWrapper>
                        <TotalRightWrapper>
                          <TotalRightContainer>
                            <TotalText>Filled</TotalText>
                            <FilledText>2</FilledText>
                          </TotalRightContainer>
                        </TotalRightWrapper>
                      </TotalContainer>
                      <Position>Candidates:</Position>
                      <ActiveContainer>
                        <ActiveText>
                          <ActiveContent>Active</ActiveContent>
                          <ActiveNumber>05</ActiveNumber>
                        </ActiveText>
                        <ActiveText>
                          <ActiveContent>In Process</ActiveContent>
                          <ActiveNumber>06</ActiveNumber>
                        </ActiveText>
                        <ActiveText>
                          <ActiveContent>Archived</ActiveContent>
                          <ActiveNumber>01</ActiveNumber>
                        </ActiveText>
                      </ActiveContainer>
                    </CardContainer>
                    <Details onClick={() => navigate(JobDetailRoute.path)}>See Details</Details>
                  </Card>
                ))}
              </CardWrapper>
            </DataWrapper>
          </ContentWrapper>
        </SectionMain>
      </MainWrapper>
    </AdminPublicLayout>
  )
}

export default Job
