import styled from 'styled-components'

export const MainContainer = styled.div`
  padding-bottom: 160px;
  position: relative;
  flex-wrap: wrap;
`
export const Container = styled.div`
  padding: 0px 135px;
  display: flex;
  flex-direction: row;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  flex-wrap: wrap;

  @media (max-width: 1364px) {
    padding: 0px 100px 0px 100px;
  }
`
export const LeftSection = styled.div`
  flex: 1;
  padding-top: 188px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    align-items: center;
  }
`
export const SideImg = styled.img`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  left: -300px;
  z-index: -1;
  height: 950px;
  max-width: 950px;
`
export const TopImg = styled.img`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  right: -17%;
  top: -42%;
  max-height: 85%;
  max-width: 85%;
`
export const RightSection = styled.div`
  flex: 1;
  padding-top: 85px;
  display: flex;
`
export const Banner = styled.img`
  max-width: 589px;
  flex-wrap: wrap;

  @media (max-width: 1288px) {
    max-width: 480px;
  }
  @media (max-width: 1078px) {
    margin-left: auto;
    margin-right: auto;
  }
`
export const Heading = styled.h1`
  font-family: 'Inter-Medium';
  font: normal normal bold 56px/85px Poppins;
  margin-bottom: 16px;
  flex-wrap: wrap;
`
export const HeadingPara = styled.div`
  max-width: 526px;
  transition: max-width 0.5s;
`
export const Para = styled.p`
  font-family: 'Inter-Regular';
  font-size: 16px;
  max-width: 437px;
  width: 100%;
  flex-wrap: wrap;
`

export const Logo = styled.div``
