import ProfileReport from 'components/CandidatePage/CandidateReport'
import CandidatePortfolio from 'components/CandidatePage/CandidatePortfolio'
import Modal from 'components/MainModal'
import Ellipse from 'assets/images/ellipseimage.png'
import Bottom from 'assets/images/Ellipse24.png'
import { useState } from 'react'
import AboutCandidate from 'components/CandidatePage/AboutCandidate'
import data from 'pages/CandidatdeProfiletwo/data'
import CandidateQualification from 'components/CandidatePage/CandidateQualification'
import Details from 'components/RecruiterModal'
import {
  MainWrapper,
  Container,
  Section,
  InformationWrapper,
  PersonalWrapper,
  Heading,
  LineWrapper,
  EllipseImg,
  EllipseImgTwo,
  QualificationWrapper,
} from 'styles/CandidateProfileTwo'
import Information from 'components/CandidatePage/CandidateInformation'
import CandidateModal from 'components/CandidatePage/CandidateModal'

const CandidateProfile = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <MainWrapper>
        <EllipseImg src={Ellipse} alt="ellipses" />
        <EllipseImgTwo src={Bottom} alt="ellipses" />
        <Container>
          <Section>
            <ProfileReport showModal={(value: boolean) => setOpenModal(value)} />
            <CandidatePortfolio />
          </Section>
          <InformationWrapper>
            <PersonalWrapper>
              <Heading>Personal Information</Heading>
              <LineWrapper />
            </PersonalWrapper>
            <Information />
            <QualificationWrapper>
              {data.map((e: any, index) => (
                <CandidateQualification
                  key={index}
                  heading={e.heading}
                  logo={e.logo}
                  title={e.title}
                  startDate={e.startDate}
                  endDate={e.endDate}
                  city={e.city}
                  country={e.country}
                />
              ))}
            </QualificationWrapper>
            <AboutCandidate />
          </InformationWrapper>
        </Container>
      </MainWrapper>
      <Details />
      <Modal isOpen={openModal}>
        <CandidateModal hideModal={(value: boolean) => setOpenModal(value)} />
      </Modal>
    </>
  )
}

export default CandidateProfile
