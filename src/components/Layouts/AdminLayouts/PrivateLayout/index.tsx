import React from 'react'
import AdminSideNavbar from 'components/AdminSideNavBar'
import Navbar from 'components/Taskbar'
import { MainContainer, Wrapper, ComponentWrapper, GradientIndex, GradientIndexBottom } from 'styles/Layout'

const AdminPrivateLayout = ({ children }: any) => {
  return (
    <MainContainer>
      <AdminSideNavbar />
      <ComponentWrapper>
        <Navbar />
        <Wrapper>
          <GradientIndex />
          {children}
          <GradientIndexBottom />
        </Wrapper>
      </ComponentWrapper>
    </MainContainer>
  )
}

export default AdminPrivateLayout
