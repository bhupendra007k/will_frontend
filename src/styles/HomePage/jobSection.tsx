import styled from 'styled-components'

export const Container = styled.div`
  background: #f8f6ef no-repeat;
  width: 100%;
  height: 100%;
  padding: 100px 0px 94px 0px;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MainHeading = styled.p`
  font-size: 40px;
  text-align: center;
  font-family: 'Inter-SemiBold';
  opacity: 1;
  justify-content: center;
  margin: 0px;
`
export const Para = styled.p`
  font-size: 18px;
  text-align: center;
  opacity: 0.65;
  font-family: 'Inter-Regular';
`
export const Heading = styled.h2`
  font-size: 24px;
  text-align: left;
  padding-top: 15px;
  font-family: 'Inter-SemiBold';
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  padding: 15px;
  border-radius: 25px;
  background-color: #ffffff;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale();
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale();
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale();
  transition: all 200ms ease-in;
  transform: scale();
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 15px;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
  }
`
export const Img = styled.img`
  width: 68px;
  height: 63px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-family: 'Inter-Regular';
  font-weight: 300;
  padding-top: 12px;
  text-align: left;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 30px;
  padding: 80px;
`
