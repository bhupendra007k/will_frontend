import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePost from 'hooks/usePost'
import useGet from 'hooks/useGet'
import Modal from 'components/MainModal'
import Button from 'components/Button'
import RecruiterModal from 'components/RecruiterModal'

import Loader from 'components/Loader'
import CandidateData from 'components/CandidateData'
import ErrorModal from 'components/Modal/SuccessErrorModal/errormodal'

import TableMain from 'views/Admin/table'

import { AddRecriuterRoute, RecuritersRoute } from 'constants/routes'
import { ADMIN_GET_RECRUITERS, ADMIN_RECRUITERS_COUNT } from 'constants/apiRoutes'

import ListIcon from 'assets/images/list-icon.png'
import List from 'assets/svg/ListView'
import Grid from 'assets/svg/GridView'
import Dice from 'assets/images/View.png'

import Dot from 'assets/images/threedots.png'

import {
  MainWrapper,
  SectionMain,
  ContentWrapper,
  PostedJobs,
  JobsContent,
  JobsContentSub,
  ImageWrapper,
  ShowHeading,
  Wrapper,
  BoxWrapper,
  RecruitWrap,
} from 'styles/AdminJobPage/job'
import { JobsContentSub2, DataWrapper } from 'styles/AdminJobPage/recuriters'
import { TableHeader, Image, Details, Dots } from 'styles/Table'
import AdminPublicLayout from 'components/Layouts/AdminLayouts/PublicLayout'

const Recuriters = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [list, setList] = useState(true)
  const [background, setBackground] = useState(true)
  const [nonBackground, setnonBackground] = useState(false)
  const { mutateAsync, isLoading } = usePost()
  const [dataInitial, setInitialData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [errorModal, setErrorModal] = useState(false)

  const argument = { key: 'recruiter-length', url: ADMIN_RECRUITERS_COUNT, token: true }

  const { refetch: fetchDetails, data } = useGet(argument)

  useEffect(() => {
    fetchDetails()
  }, [])

  useEffect(() => {
    if (data) {
      const userGetData = data.data

      dataRecieve(userGetData)
    }
  }, [data])

  const dataRecieve = async (userGetData: any) => {
    try {
      const payloadData = {
        offset: 0,
        limit: userGetData,
      }
      const response = await mutateAsync({
        url: ADMIN_GET_RECRUITERS,
        payload: payloadData,
        token: true,
      })

      setInitialData(response?.data)
      setTotalPages(response?.data?.length)
    } catch (error) {
      setErrorModal(true)
    }
  }

  const tableData: any = []

  dataInitial.forEach((element: any, i) => {
    tableData.push({
      key: i,
      profile: (
        <TableHeader className="red">
          <div>
            <Image src={element.profilePicture} />
          </div>
          <Details>{element.name}</Details>
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
      <AdminPublicLayout>
        <div>{isLoading && <Loader />}</div>
        <MainWrapper>
          <SectionMain>
            <Wrapper>
              <ContentWrapper>
                <RecruitWrap>
                  <PostedJobs>
                    <JobsContent>
                      <JobsContentSub>Recruiters</JobsContentSub>
                      <JobsContentSub2>
                        <ImageWrapper>
                          <BoxWrapper
                            active={background}
                            onClick={() => {
                              setBackground(true)
                              setnonBackground(false)
                            }}
                          >
                            <List
                              src={ListIcon}
                              alt="box"
                              onClick={() => {
                                setList(true)
                              }}
                            />
                          </BoxWrapper>
                          <BoxWrapper
                            active={nonBackground}
                            onClick={() => {
                              setBackground(false)
                              setnonBackground(true)
                            }}
                          >
                            <Grid
                              src={Dice}
                              alt=""
                              onClick={() => {
                                setList(false)
                              }}
                            />
                          </BoxWrapper>
                        </ImageWrapper>
                      </JobsContentSub2>
                    </JobsContent>
                    <Button label="Add Recruiter" variant="post" handleClick={() => navigate(AddRecriuterRoute.path)} />
                  </PostedJobs>
                  <DataWrapper className="data">
                    {list ? (
                      <TableMain
                        data={tableData}
                        onSelect={() => setOpenModal(true)}
                        pagination={{
                          pageSize: 10,
                          total: totalPages,
                        }}
                      />
                    ) : (
                      <CandidateData data={tableData} />
                    )}
                    <ShowHeading>{`Showing 10 from ${totalPages}data`}</ShowHeading>
                  </DataWrapper>
                </RecruitWrap>
              </ContentWrapper>
            </Wrapper>
          </SectionMain>
          <Modal isOpen={openModal} hideModal={() => setOpenModal(false)}>
            <RecruiterModal />
          </Modal>
        </MainWrapper>
      </AdminPublicLayout>
      {errorModal && <ErrorModal data={RecuritersRoute.path} />}
    </>
  )
}

export default Recuriters
