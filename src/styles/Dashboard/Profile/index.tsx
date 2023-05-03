import styled from 'styled-components'

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 300px;
  width: 100%;
  max-height: 854px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 0px #3e49540a;
  border-radius: 20px;
  @media (max-width: 1024px) {
    display: flex;
    max-width: 822px;
    width: 100%;
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProfileImage = styled.img`
  width: 114px;
  padding-top: 28px;
`
export const NameHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-family: 'Inter-SemiBold';
`
export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-family: 'Inter-Regular';
  opacity: 0.65;
`
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProgressData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter-Regular';
  font-size: 12px;
  padding-left: 0px 10px;
  gap: 25px;
`
export const Image = styled.img`
  display: flex;
  justify-content: space-between;
  height: 60px;
`
export const GraphHeading = styled.p`
  display: flex;
  justify-content: center;
  gap: 45px;
  padding-left: 10px;
  opacity: 0.65;
`
export const RecentActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`
export const Head = styled.h1`
  font-size: 20px;
  font-family: 'Inter-SemiBold';
  font-size: 16px;
`
export const RecentActivitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`
export const ActivitiesContentContainer = styled.div`
  display: flex;
  gap: 15px;
  font-family: 'Inter-Regular';
`
export const ActivitiesContentContainerLast = styled.div`
  display: flex;
  gap: 15px;
  font-family: 'Inter-Regular';
  background: transparent;
  filter: blur(2px);
`
export const ApplicationImage = styled.img`
  padding-top: 30px;
  padding-bottom: 45px;
`
export const ParagraphContent = styled.p`
  font-size: 14px;
  font-family: 'Inter-Regular';

  padding-top: 20px;
  .time {
    margin-top: 0px;
    opacity: 0.65;
  }
`
export const ScrollWrapper = styled.div`
  position: absolute;
  left: 131px;
  bottom: -34px;
  @media (max-width: 1024px) {
    position: absolute;
    left: 314px;
  }
  @media (max-width: 875px) {
    left: 249px;
  }
`
export const ScrollIcon = styled.img`
  width: 60px;
  height: 60px;
`
