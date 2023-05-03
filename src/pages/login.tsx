import { useNavigate } from 'react-router-dom'
import LoginForm from 'components/Forms/LoginForm'
import GoogleAuth from 'components/GoogleAuth'
import { HomepageRoute, SignupRoute } from 'constants/routes'
import Banner from 'assets/images/banner.png'
import {
  BannerWrapper,
  FormWrapper,
  MainContainer,
  BannerImg,
  LoginWrapper,
  LogoContainer,
  EmptyIndex,
  HeadingContainer,
  ParaContainer,
  OptionalLogin,
  InfoContainer,
  Option,
  SignupRedirectWrapper,
  SignupRedirect,
} from 'styles/Login'

const Login = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <BannerWrapper>
        <BannerImg src={Banner}></BannerImg>
      </BannerWrapper>
      <FormWrapper>
        <LoginWrapper>
          <LogoContainer onClick={() => navigate(HomepageRoute.path)} />
          <InfoContainer>
            <EmptyIndex />
            <HeadingContainer>
              <div>Login to WIL</div>
            </HeadingContainer>
            <ParaContainer>
              <SignupRedirectWrapper>
                <div>New User?</div>
                <SignupRedirect onClick={() => navigate(SignupRoute.path)}>Create an Account</SignupRedirect>
              </SignupRedirectWrapper>
            </ParaContainer>
          </InfoContainer>
          <div className="inputs">
            <LoginForm />
          </div>
          <OptionalLogin>
            <Option>
              <p>OR</p>
            </Option>
            <GoogleAuth />
          </OptionalLogin>
        </LoginWrapper>
      </FormWrapper>
    </MainContainer>
  )
}

export default Login
