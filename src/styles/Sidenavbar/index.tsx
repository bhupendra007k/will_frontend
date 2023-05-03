import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 259px;
  min-height: 100vh;
  background: #ffebb1;
`
export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 48px;
  min-height: 100vh;
  gap: 62px;
`
export const LogoContainer = styled.div``
export const LogoImage = styled.img`
  width: 124px;
  height: 64px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`
export const Sidebar = styled.div`
  display: flex;

  flex-direction: column;
  gap: 25px;
  cursor: pointer;
`
export const Tools = styled.img`
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px;

  &.active {
    background: #fafafa;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }
`
export const ToolHeading = styled.h2`
  font-family: 'Inter-Medium';
  font-size: 14px;
  color: #292929;
  margin-bottom: 0px;
  opacity: 1;
  font-weight: 500;
`
