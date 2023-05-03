import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  background-color: #fafafa;
  flex-direction: row;
  gap: 15px;
`
export const Section = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
export const MainWrapper = styled.div`
  background-color: #fafafa;
  padding: 39px 40px 50px 46px;
  flex-wrap: wrap;
  position: relative;
`

export const EllipseImg = styled.img`
  position: absolute;
  right: 1px;
  top: 1px;
`
export const EllipseImgTwo = styled.img`
  position: absolute;
  right: 1px;
  bottom: 1px;
`
export const InformationWrapper = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
  z-index: 1;
`
export const FormWrapper = styled.div``
export const PersonalWrapper = styled.div`
  margin: 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Heading = styled.div`
  margin: 0px;
  width: 100%;
  max-width: 13%;
  font-family: 'Inter-bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`
export const LineWrapper = styled.div`
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 0px;
`
export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0px 45px 0px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`
export const Left = styled.div`
  border-right: 1px solid #e7e7e7;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-right: none;
  }
`
export const Right = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`
export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NameHeading = styled.div`
  font-size: 14px;
  width: 100%;
  font-family: 'INTER-bold';
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`

export const EditHeading = styled.div`
  font-family: 'INTER-semibold';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  opacity: 0.65;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`
export const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MobileHeading = styled.div`
  font-weight: 700;
  font-size: 14px;
`
export const CityHeading = styled.div`
  font-weight: 700;
  font-size: 14px;
`
export const CityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UsernameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UsernameHeading = styled.div`
  font-weight: 700;
  font-size: 14px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`
export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  @media (max-width: 1200px) {
    padding-right: 94px;
  }
`

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter-bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`
export const Line = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 90%;
  opacity: 1;
`
export const AboutContainer = styled.div`
  border: 1px solid green;
`
export const Paragraph = styled.p`
  font-family: 'Inter-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0px;
`
export const AboutHeading = styled.p`
  font-family: 'Inter-semibold';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin: 0px;
`
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`
export const About = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  padding-bottom: 30px;
`
export const QualificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
