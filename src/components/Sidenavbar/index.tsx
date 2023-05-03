import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../Utils'
import {
  MainContainer,
  LogoContainer,
  LogoImage,
  Sidebar,
  Box,
  Tools,
  ToolHeading,
  SideBarWrapper,
} from 'styles/Sidenavbar'
import Wits from 'assets/images/logo.png'
import { candjobsData } from 'components/Sidenavbar/sidebarData'
import { DashboardRoute } from 'constants/routes'
import Logout from 'assets/images/back.png'

const SideNavbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const logoutHandler = () => {
    console.log('logout')

    navigate('/login')
    logout()
  }

  return (
    <MainContainer>
      <SideBarWrapper>
        <LogoContainer>
          <LogoImage onClick={() => navigate(DashboardRoute?.path)} src={Wits} alt="logo" />
        </LogoContainer>
        <Sidebar>
          {candjobsData.map((e: any, index: any) => {
            return (
              <Box
                className={location.pathname === e.href ? 'active' : ''}
                key={index}
                onClick={() => e?.href && navigate(e?.href)}
              >
                <Tools src={e.src} alt="" />
                <ToolHeading>{e.heading} </ToolHeading>
              </Box>
            )
          })}
          <Box onClick={() => logoutHandler()}>
            <Tools src={Logout} alt="image" />
            <ToolHeading>Log Out</ToolHeading>
          </Box>
        </Sidebar>
      </SideBarWrapper>
    </MainContainer>
  )
}

export default SideNavbar
