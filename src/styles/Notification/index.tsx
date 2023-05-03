import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  z-index: 10;
  max-width: 450px;
  max-height: 500px;
  top: 60px;
  left: -330px;
  right: 10px;
  padding: 20px;
  box-shadow: 0px 4px 19px #0000001f;
  background: #ffffff;
  border-radius: 20px;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardImage = styled.img`
  padding-top: 10px;
  max-width: 71px;
`
export const CardDate = styled.p`
  padding-top: 10px;
`
export const CardParagraph = styled.p`
  font-size: 14px;
  opacity: 0.65;
`
export const CardHeading = styled.h4`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
`
export const CardData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
`
export const SubCard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MainHead = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Heading = styled.h4`
  font-size: 18px;
  font-family: 'Inter-SemiBold';
`
export const SubHeading = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  color: #1d2e88;
  padding: 0px;
`
