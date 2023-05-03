import styled from 'styled-components'
import logo from 'assets/images/logo.png'

export const MainContainer = styled.section`
  display: flex;
  background-color: #fff;
  position: relative;
  padding: 0px 0px;
  max-width: 1920px;
  margin: 0 auto;
`
export const BannerWrapper = styled.div`
  display: flex;
  flex: 1;
  background: #fafafa;
  object-fit: cover;
  padding: 30px 0;
  @media (max-width: 1070px) {
    display: none;
  }
  @media (max-height: 670px) {
  }
`
export const FormWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  padding: 30px;
  .inputs {
    z-index: 2;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`
export const TopImg = styled.img`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  right: -27%;
  top: -32%;
  max-height: 100%;
  max-width: 100%;
  @media (max-width: 1070px) {
    display: none;
  }
`
export const EmptyIndex = styled.div`
  position: absolute;
  background: #f3cb69a1;
  height: 800px;
  width: 800px;
  left: 35%;
  bottom: -200px;
  background: radial-gradient(#f5d279e1, #f5d279e1, #fff, #fff, #fff);
  filter: blur(80px);
  opacity: 50%;
  z-index: -1;
`
export const BannerImg = styled.img`
  max-width: 100%;
`
export const LoginWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`
export const LogoContainer = styled.div`
  background-image: url(${logo});
  height: 74px;
  width: 143px;
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 60px;
    width: 110px;
  }
`
export const ButtonWrapper = styled.div`
  max-width: 449px;
  display: flex;
  padding-bottom: 45px;
`
export const Button = styled.div`
  width: 220px;
  padding-bottom: 13px;
  z-index: 1;
  font: normal normal normal 20px/30px Poppins;
  color: #1d2e88;
  opacity: 1;
  color: darkblue;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &.active {
    display: none;
    border-bottom: 4px solid darkblue;
    margin-top: 2px;
    font: normal normal 600 20px/30px Poppins;
    letter-spacing: 0.63px;
    color: #1d2e88;
    opacity: 1;
  }
`
export const HeadingContainer = styled.div`
  font-size: 30px;
  font-family: 'Inter-Bold';
  letter-spacing: 0.38px;
  color: #272727;
  padding-bottom: 10px;
  opacity: 1;
`
export const ParaContainer = styled.div`
  max-width: 445px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  letter-spacing: 0.3px;
  color: #272727d9;
  opacity: 1;
`
export const SubmitWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 825px) {
  }
`
export const ForgetWrapper = styled.div`
  a {
    text-decoration: none;
    font: normal normal normal 20px/30px Poppins;
    letter-spacing: 0.63px;
    color: #1d2e88;
    opacity: 1;
  }
  a:hover {
    color: #4b67ff;
  }
  @media (max-width: 825px) {
    padding-left: 20px;
  }
`
export const OptionalLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-end;
  font: normal normal normal 16px/25px Poppins;
  color: #272727d9;
  opacity: 1;
  gap: 30px;
  font-family: 'Inter-Regular';
`
export const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const GoogleWrapper = styled.div`
  display: flex;
  justify-content: center;
  .GoogleLogin {
    display: flex;
    justify-content: center;
    height: 59px;
    width: 450px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  }
`
export const LinkdnWrapper = styled.div``
export const Googlebutton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`
export const Linkdnbutton = styled.div`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`
export const LinkdnImg = styled.img`
  width: 58px;
  height: 58px;
`
export const CreateAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 211px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  &.active {
    display: none;
    border-bottom: 4px solid darkblue;
    margin-top: 2px;
    font: normal normal 600 20px/30px Poppins;
    letter-spacing: 0.63px;
    color: #1d2e88;
    opacity: 1;
  }
  .p {
    font-family: 'Inter-Regular';
  }
`
export const CreateAccount = styled.div`
  color: darkblue;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Inter-Regular';
  .hover {
    color: #00008a9d;
  }
`
export const InfoContainer = styled.div`
  padding-top: 30px;
  position: relative;
  z-index: 1;
`
export const GoogleImg = styled.img``
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const SignupRedirectWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const SignupRedirect = styled.div`
  text-decoration: underline;
  color: #1d2e88;
  cursor: pointer;
  font-family: 'Inter-Bold';
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    color: #0b1443;
  }
`
export const DropDownWrapper = styled.select`
  max-width: 445px;
  width: 100%;
  display: flex;
  border-radius: 15px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  padding: 18px 21px 18px 15px;
  border: 1px solid #00000033;
  outline: none;
  background: transparent;
  animation: ease-out;
`
