import styled from 'styled-components'
import logo from 'assets/images/logo.png'
import Subscribe from 'assets/images/subscribe.png'
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(360deg, #f9c52b6b, 20%, white);
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 70px;
  @media (max-width: 1098px) {
    width: 900px;
    padding: 0px 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 1024) {
    width: 820px;
    padding: 0px 60px;
    display: flex;
    justify-content: center;
  }
`

export const SubContainer = styled.div`
  display: flex;
  padding-top: 64px;
  flex-direction: column;
  text-align: center;
  height: 420px;
  width: 1170px;
  border-radius: 45px;
  background: #000000 0% 0% no-repeat padding-box;
`
export const Sub = styled.div`
  background-image: url(${Subscribe});
  background-repeat: no-repeat;
  background-size: cover;
  right: -10%;
  top: 8%;
  z-index: -1;
  height: 800px;
  width: 800px;
`
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeadingContainer = styled.div`
  width: 470px;
  height: 106px;

  .heading {
    color: white;
    font-family: 'Inter-SemiBold';
    font-size: 36px;
  }
`
export const ParaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;

  .para {
    color: white;
    font-family: 'Inter-Regular';
    font-size: 18px;
  }
`
export const SubArea = styled.div`
  display: flex;
  width: 609px;
  margin-top: 58px;
  padding-left: 15px;
  border-radius: 15px;
  background-color: white;
  .button:hover {
    opacity: 0.6;
  }
`

export const ContactBar = styled.div`
  display: flex;
  justify-content: center;
`
export const LogoContainer = styled.div`
  background-image: url(${logo});
  height: 90px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`
export const FooterContainer = styled.div`
  display: flex;
`

export const RightContainer = styled.div`
  flex: 1;
`
export const LeftContainer = styled.div``
export const Card = styled.div`
  display: flex;
  width: 50%;
  padding: 100px 135px;
  flex-direction: column;
  justify-content: center;

  div {
    width: 284px;
    font-size: 18px;
    font-family: 'Inter-Regular';
    padding: 10px;
  }
`
export const Lists = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const ListItems = styled.li`
  list-style: none;
  font-family: 'Inter-Regular';
  color: grey;
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: #000;
  }
`
export const Wrapper = styled.div`
  display: flex;
  padding: 133px 0px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const Rights = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Inter-Regular';
  font-size: 18px;
  font-family: 'Inter-Regular';
  padding-bottom: 20px;
`
export const ListHead = styled.h2`
  margin-bottom: 30px;
`
