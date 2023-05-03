import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  overflow-y: scroll;
`
export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 644px;
  background-color: #fff;
  padding-bottom: 20px;
`
export const HeadingWrapper = styled.div`
  width: 100%;
  min-height: 154px;
  background: #f5f5f5;
  display: flex;
  gap: 30px;
  padding-left: 50px;
`
export const ProfileImage = styled.img`
  align-self: center;
`

export const PersonHeading = styled.div`
  font-family: 'Inter-SemiBold';
  font-style: normal;
  font-size: 24px;
  color: #000000;
`
export const DataHeading = styled.div`
  display: flex;
  gap: 16px;
`

export const MainHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 16px;
  color: #909090;
`

export const SubHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 16px;
  color: #909090;
`
export const LineWrapper = styled.img`
  align-self: center;
`
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TabWrapper = styled.div`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1d2e88;

    font-family: 'Inter-SemiBold';
    font-style: normal;
    font-size: 14px;
    color: #1d2e88;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
    padding-left: 43px;
  }
  .tab {
    font-family: 'Inter-SemiBold';
    font-size: 14px;
    color: #737b7d;
  }
  .ant-tabs-ink-bar {
    background: #1d2e88;
  }

  .ant-tabs-tab:hover {
    color: #1d2e88;
  }
`
export const NoData = styled.div`
  min-height: 100vh;
`
