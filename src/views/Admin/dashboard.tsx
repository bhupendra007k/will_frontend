import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGet from 'hooks/useGet'
import usePost from 'hooks/usePost'
import Button from 'components/Button'
import RecruiterModal from 'components/RecruiterModal'
import Modal from 'components/MainModal'
import ErrorModal from 'components/Modal/SuccessErrorModal/errormodal'
import Loader from 'components/Loader'
import { LoaderContext } from 'context/loader'
import TableMain from 'views/Admin/table'

import {
  AdminDashboardRoute,
  AdminJobRoute,
  JobDetailRoute,
  JobRoute,
  AddRecriuterRoute,
  RecuritersRoute,
} from 'constants/routes'

import { ADMIN_RECRUITERS_COUNT } from 'constants/apiRoutes'

import Options from 'assets/images/threedots.png'
import Dot from 'assets/images/threedots.png'

import {
  MainWrapper,
  SectionMain,
  ContentWrapper,
  JobsWrapper,
  PostedJobs,
  JobsContent,
  JobsContentSub,
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
  TableWrapper,
  TotalText,
  FilledText,
  ActiveContainer,
  ActiveText,
  ActiveContent,
  ActiveNumber,
  Details,
  ViewAll,
  SubCard,
  CardData,
  OutlineWrapper,
  RecruiterWrappper,
  Container,
  RecruitWrap,
} from 'styles/AdminJobPage/job'
import { DataWrapper } from 'styles/AdminJobPage/recuriters'
import { TableHeader, Image, Dots } from 'styles/Table'
import AdminPrivateLayout from 'components/Layouts/AdminLayouts/PrivateLayout'

interface IFormInputs {
  name: string
  designation?: string
  phone: number
  email: string
  jobType: string
  experience: number
  empType: string
  profilePicture: any
}

const AdminDashboard = () => {
  const { setLoader } = useContext(LoaderContext)
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  const [dataInitial, setInitialData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [errorModal, setErrorModal] = useState(false)

  const argument = { key: 'userDetails', url: '/get-jobs-stats', token: true }

  const { refetch: fetchDetails, data, isLoading: loders } = useGet(argument)

  useEffect(() => {
    fetchDetails()
  }, [])

  const lengthArgument = { key: 'length-recruiter', url: ADMIN_RECRUITERS_COUNT, token: true }

  const { refetch: fetchRecruiterLength, data: getData } = useGet(lengthArgument)

  useEffect(() => {
    fetchRecruiterLength()
  }, [data])

  useEffect(() => {
    if (data) {
      const lengthCount = getData.data

      dataRecieve(lengthCount)
    }
  }, [getData])

  useEffect(() => {
    if (loders) setLoader(true)
    else setLoader(false)
  })

  const { mutateAsync, isLoading } = usePost()
  const dataRecieve = async (lengthCount: number) => {
    try {
      const payloadData = {
        offset: 0,
        limit: lengthCount,
      }
      const response = await mutateAsync({
        url: '/get-recruiters',
        payload: payloadData,
        token: true,
      })

      setInitialData(response?.data)
      setTotalPages(response?.data?.length)
    } catch (error) {
      setErrorModal(true)
    }
  }

  const tableData: {
    key: number
    profile: JSX.Element
    role: any
    experience: any
    mobile: any
    mail: any
    src: JSX.Element
  }[] = []

  dataInitial.forEach((element: any, i) => {
    tableData.push({
      key: i,
      profile: (
        <TableHeader>
          <Image src={element.profilePicture} />
          <div>{element.name}</div>
        </TableHeader>
      ),
      role: element.jobType,
      experience: element.experience,
      mobile: element.phone,
      mail: element.email,
      src: <Dots src={Dot} />,
    })
  })

  return (
    <>
      <AdminPrivateLayout>
        <div>{isLoading && <Loader />}</div>
        <MainWrapper>
          <SectionMain>
            <ContentWrapper>
              <JobsWrapper>
                <PostedJobs>
                  <JobsContent>
                    <JobsContentSub>Posted Jobs</JobsContentSub>
                  </JobsContent>
                  <Button label="Post a job" variant="post" handleClick={() => navigate(JobRoute.path)} />
                </PostedJobs>
                <Container>
                  <CardWrapper>
                    {data?.data?.map((e: any, index: number) => {
                      if (index <= 3) {
                        return (
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
                                    <TotalText>Total </TotalText>
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
                            <Details
                              onClick={() => {
                                navigate(JobDetailRoute.path)
                              }}
                            >
                              See Details
                            </Details>
                          </Card>
                        )
                      }
                    })}
                  </CardWrapper>
                </Container>
                <ViewAll onClick={() => navigate(AdminJobRoute.path)}>View all</ViewAll>
              </JobsWrapper>
            </ContentWrapper>
            <ContentWrapper>
              <RecruitWrap>
                <PostedJobs>
                  <JobsContent>
                    <JobsContentSub>Recruiters</JobsContentSub>
                  </JobsContent>
                  <Button label="Add Recruiter" variant="post" handleClick={() => navigate(AddRecriuterRoute.path)} />
                </PostedJobs>
                <DataWrapper>
                  <RecruiterWrappper>
                    <TableWrapper>
                      <TableMain
                        data={tableData}
                        onSelect={() => setOpenModal(true)}
                        pagination={{ pageSize: 10, total: totalPages }}
                      />
                    </TableWrapper>
                  </RecruiterWrappper>
                  <ViewAll onClick={() => navigate(RecuritersRoute.path)}>View all</ViewAll>
                </DataWrapper>
              </RecruitWrap>
            </ContentWrapper>
          </SectionMain>

          <Modal isOpen={openModal} hideModal={() => setOpenModal(false)}>
            <RecruiterModal />
          </Modal>
        </MainWrapper>
      </AdminPrivateLayout>

      {errorModal && <ErrorModal data={AdminDashboardRoute.path} />}
    </>
  )
}

export default AdminDashboard
