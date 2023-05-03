import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  z-index: 10;
  max-width: 550px;
  max-height: 500px;
  top: 60px;
  left: -400px;
  box-shadow: 0px 4px 19px #0000001f;
  background: #ffffff;
  border-radius: 20px 0px 20px 20px;
`

export const Card = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 0px 0px 20px 20px;
`

export const CardImage = styled.img`
  padding-top: 25px;
  padding-left: 4px;
`
export const CardDate = styled.p`
  padding-top: 10px;
  padding-right: 15px;
`
export const CardParagraph = styled.p`
  font-size: 14px;
  opacity: 0.65;
  margin-top: -15px;
`
export const CardHeading = styled.h4`
  font-size: 14px;
`
export const CardData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 16px;
  padding-top: 37px;
`
export const SubCard = styled.div`
  display: flex;
`
export const MainHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`
export const Heading = styled.h4`
  font-size: 18px;
  padding-left: 25px;
`
export const SubHeading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #1d2e88;
  padding-right: 15px;
`
export const Button = styled.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  margin-left: auto;
  margin-bottom: 10px;
  margin-right: 10px;
  border: none;
`
