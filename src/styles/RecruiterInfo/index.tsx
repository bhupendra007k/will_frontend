interface IActive {
  active: boolean
}

import styled from 'styled-components'
export const Section = styled.div`
  display: flex;
`

export const MainContainer = styled.div`
  background: #fafafa;
  position: relative;
  width: 100%;
`
export const Navbar = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
`
export const Heading = styled.div`
  font-family: 'Inter-SemiBold';
  font-style: normal;
  font-size: 24px;
  color: #000000;
`
export const Card = styled.div`
  width: 100%;
  max-width: 260px;
  background: #fafafa;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 10px 13px 10px;
  z-index: 1;
`
export const ImageWrapper = styled.div`
  .red {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`
export const CandidateImage = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  gap: 15px;
  justify-content: center;
  align-items: center;
`
export const CandidateName = styled.div`
  font-family: 'Inter-SemiBold';
  font-style: normal;
  font-size: 16px;
  color: #000000;
  width: 100%;
`
export const SubHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`
export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 240px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 12px 16px;
`
export const ImageDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ExperienceImage = styled.img``
export const CallImage = styled.img``
export const EmailImage = styled.img``
export const DataWrapper = styled.div``
export const ExperienceHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 14px;
  color: #000000;
`
export const MobileNumber = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 14px;
  color: #000000;
`
export const Email = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  word-break: break-all;
  font-size: 14px;
  color: #000000;
`
export const DotsImage = styled.img`
  display: flex;
  flex-direction: column-reverse;
`
export const DotWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
`
export const EllipseImg = styled.img`
  position: absolute;
  right: 1px;
  top: 92px;
`
export const EllipseImgTwo = styled.img`
  position: absolute;
  right: 1px;
  bottom: 1px;
`
export const ContainerWrapper = styled.div`
  padding: 39px;
`
export const BoxImage = styled.img`
  width: 20px;
  height: 15px;
`
export const DiceImage = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
`
export const NavWrapper = styled.div`
  display: flex;
  gap: 12px;
  .active {
    fill: white;
  }
`
export const RecruiterWrapper = styled.div`
  background: #1d2e88;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  align-items: center;
  z-index: 1;
`
export const RecruiterHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
`
export const LineWrapper = styled.div`
  height: 39px;
  border: 1px solid #787486;
`
export const BoxWrapper = styled.div``
export const DiceWrapper = styled.div<IActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? '#1d2e88' : '')};
  border-radius: 6px;
  width: 100%;
  min-width: 40px;
  height: 40px;
`
export const ShowHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 14px;
  margin-top: -20px;
  color: #000000;
`
