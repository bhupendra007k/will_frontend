import Banner from 'assets/images/banner.png'
import Top from 'assets/images/topImg.png'

import {
  BannerWrapper,
  FormWrapper,
  MainContainer,
  BannerImg,
  LogoContainer,
  TopImg,
  HeadingContainer,
  ParaContainer,
} from 'styles/Login'
import { SignupWrapper } from 'styles/Signup'
import ForgotPasswordForm from 'components/Forms/ForgotPassword'

const ForgotPassword = () => {
  return (
    <MainContainer>
      <BannerWrapper>
        <BannerImg src={Banner}></BannerImg>
      </BannerWrapper>
      <FormWrapper>
        <TopImg src={Top}></TopImg>
        <SignupWrapper>
          <LogoContainer />
          <div>
            <HeadingContainer>
              <h1>FORGOT PASSWORD</h1>
            </HeadingContainer>
            <ParaContainer>
              <div>
                Don’t worry, happen to the best of us. Enter the email associated with your account & we shall send an
                email with instruction to reset your password.
              </div>
            </ParaContainer>
            <ForgotPasswordForm />
          </div>
        </SignupWrapper>
      </FormWrapper>
    </MainContainer>
  )
}

export default ForgotPassword
