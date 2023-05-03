import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
`
export const HeadingWrapper = styled.h1`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
`
export const ContainerSubHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 11px;
  font-family: 'Inter-Medium';
  color: #1d2e88;
  border: 1px solid #1d2e88;
  border-radius: 23px;
  width: 120px;
  height: 35px;
`
export const ArrowImage = styled.img`
  height: 10px;
`
export const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  padding-top: 25px;
  @media (max-width: 1674px) {
    :last-child {
      display: none;
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 19px #0000001f;
  border-radius: 20px;
  width: 234px;
  max-height: 143px;
  align-items: center;
  gap: 20px;
  /* :hover {
    width: 236px;
    height: 145px;
    transition: 0.15s;
  } */
`
export const ImageSection = styled.div`
  display: flex;
  gap: 50px;
`
export const ImageIcon = styled.img`
  display: flex;
  margin-top: 20px;
`
export const CalendarImage = styled.img`
  position: absolute;
  margin-top: 98px;
  margin-left: 40px;
`
export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`
export const SectionHeading = styled.p`
  display: flex;
  font-family: 'Inter-Regular';
  font-size: 13px;
`
export const DateHeading = styled.p`
  display: flex;
  font-family: 'Inter-Regular';
  font-size: 13px;
`
export const CompanySection = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`
export const CompanyImage = styled.img`
  align-self: center;
`
export const CompanyName = styled.h4`
  align-self: center;
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  margin-top: 0px;
`
export const CompanyParagraph = styled.p`
  align-self: center;
  font-size: 14px;
  font-family: 'Inter-Medium';
  margin-top: 0px;
  opacity: 0.65;
`
