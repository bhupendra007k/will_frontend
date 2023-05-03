import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fafafa;
  padding: 0px 30px;
`
export const DashboardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 42px 0px;
  @media (max-width: 1334px) {
    gap: 20px;
  }
`
export const MeetingScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 25px;
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding-left: 0px;
  }
`
export const MeetingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 26px;
  box-shadow: 0px 4px 0px #3e49540a;
  border-radius: 20px;
  background: #ffffff;
`
export const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerHeading = styled.h3`
  margin-top: 40px;
  font-size: 16px;
`
export const DataContainer = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  max-width: 270px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px 0px;
  margin-right: 25px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 19px #3e49540a;
  @media (max-width: 1674px) {
    :nth-last-child(n + 7) {
      display: none;
    }
  }
  @media (max-width: 1440px) {
    :nth-last-child(n + 6) {
      display: none;
    }
  }
`
export const BoxImage = styled.img`
  box-shadow: 0px 3px 6px #00000008;
  border-radius: 15px;
  opacity: 1;
`
export const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const CompanyHeading = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 13px;
  padding-top: 20px;
`
export const CompanyTitle = styled.p`
  color: #1d2e88;
`
