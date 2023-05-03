import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import usePost from 'hooks/usePost'
import useGet from 'hooks/useGet'

import Modal from 'components/MainModal'
import InterviewerModal from 'components/InterviewerPortal/InterviewerDetails'

import CandidateData from 'components/CandidateData'
import AdminPublicLayout from 'components/Layouts/AdminLayouts/PublicLayout'
import Loader from 'components/Loader'
import Button from 'components/Button'
import ErrorModal from 'components/Modal/SuccessErrorModal/errormodal'
import TableMain from 'views/Admin/table'
import { AddInterviewerRoute, InterviewerPortal } from 'constants/routes'
import { ADMIN_GET_INTERVIEWERS } from 'constants/apiRoutes'
import ListIcon from 'assets/images/list-icon.png'
import Dice from 'assets/images/View.png'
import List from 'assets/svg/ListView'
import Grid from 'assets/svg/GridView'
import Dot from 'assets/images/threedots.png'

import {
  Navbar,
  Heading,
  NavWrapper,
  RecruiterWrapper,
  LineWrapper,
  DiceWrapper,
  ShowHeading,
} from 'styles/RecruiterInfo'

import { TableHeader, Image, Details, Dots } from 'styles/Table'
import { MainContainer, Container, ContainerWrapper, ContentWrapper } from 'styles/Interviewer'

const Interviewer = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [list, setList] = useState(true)

  const [backgroundColor, setBackgroundColor] = useState(true)
  const [nonBackgroundColor, setNonBackgroundColor] = useState(false)

  const { mutateAsync, isLoading } = usePost()
  const [dataInitial, setInitialData] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const argument = { key: 'interviewer-length', url: '/interviewer-count', token: true }
  const { refetch: fetchDetails, data } = useGet(argument)

  useEffect(() => {
    fetchDetails()
  }, [data])

  useEffect(() => {
    if (data) {
      const userGetData = data.data

      dataRecieve(userGetData)
    }
  }, [data])

  const dataRecieve = async (userGetData: number) => {
    try {
      const payloadData = {
        offset: 0,
        limit: userGetData,
      }
      const response = await mutateAsync({
        url: ADMIN_GET_INTERVIEWERS,
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
        <MainContainer>
          <Container>
            <ContentWrapper>
              <Navbar>
                <NavWrapper>
                  <Heading>Interviewers</Heading>
                  <LineWrapper />
                  <DiceWrapper
                    active={backgroundColor}
                    onClick={() => {
                      setBackgroundColor(true)
                      setNonBackgroundColor(false)
                    }}
                  >
                    <List src={ListIcon} alt="box" onClick={() => setList(true)} />
                  </DiceWrapper>
                  <DiceWrapper
                    active={nonBackgroundColor}
                    onClick={() => {
                      setBackgroundColor(false)
                      setNonBackgroundColor(true)
                    }}
                  >
                    <Grid src={Dice} alt="" onClick={() => setList(false)} />
                  </DiceWrapper>
                </NavWrapper>
                <RecruiterWrapper>
                  <Button
                    label="Add Interviewer"
                    variant="post"
                    handleClick={() => navigate(AddInterviewerRoute.path)}
                  />
                </RecruiterWrapper>
              </Navbar>
              <ContainerWrapper>
                {list ? (
                  <TableMain
                    data={tableData}
                    onSelect={() => setOpenModal(true)}
                    pagination={{ pageSize: 10, total: totalPages }}
                  />
                ) : (
                  <CandidateData data={tableData} />
                )}
                <ShowHeading>{`Showing ${0} from ${totalPages} data`}</ShowHeading>
              </ContainerWrapper>
            </ContentWrapper>
          </Container>
          <Modal isOpen={openModal} hideModal={() => setOpenModal(false)}>
            <InterviewerModal />
          </Modal>
        </MainContainer>
      </AdminPublicLayout>
      {errorModal && <ErrorModal data={InterviewerPortal.path} />}
    </>
  )
}

export default Interviewer
