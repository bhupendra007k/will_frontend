import {
  MainWrapper,
  ResumeWrapper,
  ResumeContainer,
  ImageIcon,
  Wrapper,
  IconWrapper,
  PreviewWrapper,
} from 'styles/Resume'
import Pdf from 'assets/images/pdf.png'
import Print from 'assets/images/print.png'
import Download from 'assets/images/download.png'

const Resume = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <ResumeWrapper>
          <ImageIcon src={Pdf} alt="pdf" />
          <ResumeContainer>John_Doe_Resume.pdf</ResumeContainer>
        </ResumeWrapper>
        <IconWrapper>
          <ImageIcon src={Print} alt="print..." />
          <ImageIcon src={Download} alt="downloading..." />
        </IconWrapper>
      </Wrapper>
      <PreviewWrapper></PreviewWrapper>
    </MainWrapper>
  )
}

export default Resume
