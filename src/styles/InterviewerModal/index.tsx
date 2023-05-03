import styled from 'styled-components'

export const Container = styled.div``
export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px max-content;
  max-width: 650px;
  padding: 0 30px;
  background: #ffffff;
  justify-content: center;
`
export const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`
export const Header = styled.div`
  display: grid;
  justify-content: start;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`
export const AddInterview = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  width: 100%;
  color: #1d2e88;
  font-size: 12px;
  font-weight: 600;
  grid-gap: 5px;
`
export const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows: 22px max-content;
  grid-gap: 3px;
`
export const SubNavbar = styled.div``
export const InterviewDate = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  font-size: 8px;
  font-weight: 600;
  color: #909090;
`
export const Editor = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  grid-gap: 23px;
  padding-right: 11px;
`
export const Edit = styled.div`
  display: flex;
  justify-content: center;
`
export const Delete = styled.div`
  display: flex;
  justify-content: center;
`
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InterviewCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
    display: none;
  }
  .ant-collapse-item:last-child,
  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    padding: 0px;
  }

  .ant-collapse {
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-bottom: 0;
    border: none;
    background: #ffffff;
  }
  .ant-collapse-content > .ant-collapse-content-box {
  }
  .ant-collapse-content {
    border-top: none;
  }
`
