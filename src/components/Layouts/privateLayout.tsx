import React from 'react'
import SideNavbar from 'components/Sidenavbar'
import Taskbar from 'components/Taskbar'
import { MainContainer, Wrapper, ComponentWrapper } from 'styles/Layout'

const PrivateLayout = ({ children }: any) => {
  return (
    <MainContainer>
      <SideNavbar />
      <ComponentWrapper>
        <Taskbar />
        <Wrapper>{children}</Wrapper>
      </ComponentWrapper>
    </MainContainer>
  )
}

export default PrivateLayout
