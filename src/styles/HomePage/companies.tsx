import styled from 'styled-components'
import Bg from 'assets/images/bgjob.png'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa 0% 0% no-repeat padding-box;
  opacity: 1;
  align-items: center;
  justify-content: center;
`
export const BackgroungImg = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background: transparent url(${Bg}) no-repeat padding-box;
  opacity: 1;
  padding: 110px 0px;
`

export const Jobs = styled.p`
  margin: 0px;
  padding: 0px 0px 30px 0px;
  display: flex;
  font-size: 40px;
  font-family: 'Inter-SemiBold';
  color: #000000;
  opacity: 1;
  align-items: center;
  justify-content: center;
`

export const JobsText = styled.p`
  font-size: 18px;
  opacity: 0.65;
  margin: 0px auto;
  max-width: 668px;
  text-indent: 28px;
  letter-spacing: 0px;
  padding-bottom: 34px;
  font-family: 'Inter-Regular';
  font-size: 18px;
  color: #000000;
  opacity: 0.65;
  text-align: center;
`

export const ImagesCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 940px;
  padding-bottom: 91px;
  .img {
    width: 100px;
  }
`

export const Box2 = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000008;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  margin: 16px;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
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
export const CompanyIcon = styled.img`
  width: 93px;
`
