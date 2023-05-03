import styled from 'styled-components'
export const Section = styled.div`
  padding: 108px 135px 0px 135px;
  /* background: #fafafa 0% 0% no-repeat padding-box; */
  opacity: 1;

  @media (max-width: 596px) {
    padding: 80px 20px 20px 20px;
  } ;
`

export const SectionWrapper = styled.div`
  position: relative;
`
export const Background = styled.div`
  position: absolute;
  z-index: 50;
  filter: blur(50px);
  height: 502px;
  width: 420px;
  left: -30%;
  top: -5%;

  @media (max-width: 944px) {
    left: -55%;
    top: -25%;
  } ;
`
export const CircleImg = styled.div`
  max-width: 128px;
  height: 128px;
  margin-bottom: 24px;
`
export const FrontEndContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 38px;
`
export const FrontContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 40px;
  font-family: 'Inter-SemiBold';
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding-right: 38px;
`

export const UpdatedContent = styled.div`
  padding-top: 19px;
  justify-content: center;
  font-family: 'Inter-Regular';
  letter-spacing: 0px;
  color: #000000;
  font-size: 18px;
  opacity: 0.65;
  @media (max-width: 919px) {
    padding-top: 0px;
  } ;
`
export const JackContent = styled.div`
  text-align: left;
  font-size: 18px;
  letter-spacing: 0px;
  font-family: 'Inter-Regular';
  padding-top: 6px;
  color: #000000;
  opacity: 1;
`

export const CityContent = styled.div`
  font-family: 'Inter-Regular';
  font-size: 18px;
  letter-spacing: 0px;
  color: #1d2e88;
  opacity: 1;
  padding-top: 9px;
`
export const Salary = styled.div`
  text-align: left;
  padding-top: 9px;
  font-family: 'Inter-Medium';
  font-size: 18px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`

export const FullTime = styled.div`
  padding-top: 9px;
  font-family: 'Inter-Regular';
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.65;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 73px;
`
export const JobResponsibilty = styled.div`
  flex: 1;
  flex-wrap: wrap;
`
export const JobResponsibilityText = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding-top: 101px;
  padding-bottom: 50px;
`
export const JobRequirements = styled.div`
  flex: 1;
  flex-wrap: wrap;
`

export const JobRequirementsText = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding-top: 101px;
  padding-bottom: 50px;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: row;
`
export const WrapperImg = styled.div`
  width: 19px;
  height: 19px;
  padding-top: 13px;
  opacity: 1;
  margin-right: 19px;
`
export const Text = styled.div`
  text-align: left;
  font-family: 'Inter-Regular';
  font-size: 18px;
  color: #000000;
  opacity: 0.65;
  line-height: 2.5;
`
export const CarrierWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const CarrierLevel = styled.div`
  flex: 1;
`
export const Qualification = styled.div`
  flex: 1;
`

export const CarrierText = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`
export const SubContent = styled.div`
  font-family: 'Inter-Regular';
  font-size: 18px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.65;
  padding-top: 19px;
  padding-bottom: 56px;
`
export const JackText = styled.div`
  font-family: 'Inter-Medium';
  font-size: 24px;
  letter-spacing: 0px;
  color: #1d2e88;
  opacity: 1;
  padding-top: 27px;
  padding-bottom: 21px;
`
export const AboutText = styled.p`
  font-family: 'Inter-Regular';
  font-size: 18px;
  flex-wrap: wrap;
  max-width: 529px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.65;
`
export const ImageWrapper = styled.div`
  border: 1ps solid red;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  min-height: 490px;
  max-width: 529px;
  width: 100%;
  padding-bottom: 20px;
  letter-spacing: 0px;
  @media (max-width: 1010px) {
    min-height: 400px;
  } ;
`
