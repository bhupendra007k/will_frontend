import { useNavigate } from 'react-router-dom'
import SignupForm from 'components/Forms/SignUp'
import { HomepageRoute } from 'constants/routes'
import Banner from 'assets/images/banner.png'
import Top from 'assets/images/topImg.png'

import { SignupWrapper } from 'styles/Signup'
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

const Signup = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <BannerWrapper>
        <BannerImg src={Banner}></BannerImg>
      </BannerWrapper>
      <FormWrapper>
        <TopImg src={Top}></TopImg>
        <SignupWrapper>
          <LogoContainer onClick={() => navigate(HomepageRoute.path)} />
          <div>
            <HeadingContainer>Signup to WIL</HeadingContainer>
            <ParaContainer>Find a job that matched with your ability and interest is easier now.</ParaContainer>
            <SignupForm />
          </div>
        </SignupWrapper>
      </FormWrapper>
    </MainContainer>
  )
}

export default Signup
