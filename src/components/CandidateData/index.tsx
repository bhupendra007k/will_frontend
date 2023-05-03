import { useEffect, useState } from 'react'

import Modal from 'components/MainModal'
import InterviewerDetails from 'components/InterviewerPortal/InterviewerDetails'

import Mail from 'assets/images/mail.png'
import Experience from 'assets/images/Experience.png'
import Call from 'assets/images/call.png'
import Dots from 'assets/images/Dots 2.png'

import {
  Card,
  ImageWrapper,
  CandidateImage,
  CardWrapper,
  CandidateName,
  SubHeading,
  HeadingWrapper,
  InfoWrapper,
  ImageDataWrapper,
  ExperienceImage,
  CallImage,
  EmailImage,
  DataWrapper,
  ExperienceHeading,
  MobileNumber,
  Email,
  DotsImage,
  DotWrapper,
} from 'styles/RecruiterInfo'

interface IProps {
  data?: any
}

const CandidateData = ({ data }: IProps) => {
  const [modal, setModal] = useState(false)
  const [dataComing, setDataComing] = useState([])

  useEffect(() => {
    setDataComing(data)
  }, [])

  return (
    <CardWrapper>
      {dataComing.map((e: any, index: any) => (
        <Card key={index} onClick={() => setModal(true)}>
          <DotWrapper>
            <DotsImage src={Dots} />
          </DotWrapper>
          <ImageWrapper>
            <CandidateImage>{e.profile}</CandidateImage>
          </ImageWrapper>
          <HeadingWrapper>
            <CandidateName>{e.name}</CandidateName>
            <SubHeading>{e.role}</SubHeading>
          </HeadingWrapper>
          <InfoWrapper>
            <ImageDataWrapper>
              <div>
                <ExperienceImage src={Experience} />
                <div></div>
              </div>
              <div>
                <CallImage src={Call} />
              </div>
              <div>
                <EmailImage src={Mail} />
              </div>
            </ImageDataWrapper>
            <DataWrapper>
              <ExperienceHeading>{`${e.experience} + Years`}</ExperienceHeading>
              <MobileNumber>{e.mobile}</MobileNumber>
              <Email>{e.mail}</Email>
            </DataWrapper>
          </InfoWrapper>
        </Card>
      ))}
      <Modal isOpen={modal} hideModal={() => setModal(false)}>
        <InterviewerDetails />
      </Modal>
    </CardWrapper>
  )
}

export default CandidateData
