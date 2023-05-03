import styled from 'styled-components'
export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .Container {
    background: #f5f5f5;
    padding: 40px 0px 0px 50px;
    display: flex;
    flex-direction: column;
  }
`
export const Container = styled.div`
  display: flex;
  gap: 20px;
`
export const ProfileWrapper = styled.div`
  display: flex;
`
export const UserImage = styled.img`
  width: 80px;
  height: 80px;
`
export const UserName = styled.h3`
  font-size: 24px;
  font-family: 'Inter-SemiBold';
  margin-bottom: 0;
`
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserProfile = styled.h3`
  font-size: 16px;
  font-family: 'Inter-Medium';
  color: #909090;
`
export const RatingWrapper = styled.div`
  display: flex;
  gap: 15px;
`
export const RateText = styled.h5`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
`
export const RateImage = styled.img`
  align-self: center;
`
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const CategoryWrapper = styled.div`
  .basics {
    padding: 20px 0px 20px 20px;
  }

  .ant-tabs-ink-bar {
    background: #1d2e88;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1d2e88;
    font-family: 'Inter-SemiBold';
    font-style: normal;
    font-size: 14px;
    color: #1d2e88;
  }
  .ant-tabs-tab:hover {
    color: #1d2e88;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    padding-left: 50px;
  }
`
export const TextData = styled.h4`
  font-size: 14px;
  color: #737b7d;
`
export const Text = styled.h1`
  font-size: 20px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  left: 500px;
  width: 100%;
  overflow-y: scroll;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 675px;
  min-height: 100vh;
  height: max-content;
  background-color: white;
`
export const ClosingTab = styled.div`
  padding-left: 120px;
  padding-top: 20px;
  cursor: pointer;
`
export const BorderContainer = styled.div`
  padding: 2px;
  border-radius: 8px;
  background: #e5e5e5;
  backdrop-filter: blur(1px);
`
export const ProfileContainer = styled.div`
  background: #f5f5f5;
  padding: 40px 0px 0px 50px;
  display: flex;
  flex-direction: column;
`
export const DataContainer = styled.div``

export const BasicData = styled.div`
  padding: 20px 0px 20px 20px;
`
