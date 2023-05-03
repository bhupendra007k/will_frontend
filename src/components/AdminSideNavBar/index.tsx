import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../Utils'
import { AdminDashboardRoute } from 'constants/routes'
import Wits from 'assets/images/logo.png'
import Logout from 'assets/images/back.png'

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

import { jobsData } from 'components/AdminSideNavBar/adminSidebarRoutes'

const AdminSideNavbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const logoutHandler = () => {
    navigate('/login')
    logout()
  }

  return (
    <MainContainer>
      <SideBarWrapper>
        <LogoContainer>
          <LogoImage onClick={() => navigate(AdminDashboardRoute?.path)} src={Wits} alt="logo" />
        </LogoContainer>
        <Sidebar>
          {jobsData.map((e, index) => {
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

export default AdminSideNavbar
