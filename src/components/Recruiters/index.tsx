import CandidateData from 'components/CandidateData'
import NavBarInformation from 'components/NavbarInformation'
import AdminSideNavbar from 'components/AdminSideNavBar'
import Taskbar from 'components/Taskbar'

import Ellipse from 'assets/images/ellipseimage.png'
import Bottom from 'assets/images/Ellipse24.png'

import { MainContainer, EllipseImg, EllipseImgTwo, ContainerWrapper, Section } from 'styles/RecruiterInfo'
import { SideBar } from 'styles/SearchJob'

const RecruiterInformation = () => (
  <Section>
    <SideBar>
      <AdminSideNavbar />
    </SideBar>
    <MainContainer>
      <Taskbar />
      <EllipseImg src={Ellipse} alt="ellipses" />
      <ContainerWrapper>
        <EllipseImgTwo src={Bottom} alt="ellipses" />
        <NavBarInformation />
        <CandidateData />
      </ContainerWrapper>
    </MainContainer>
  </Section>
)

export default RecruiterInformation
