import {
  MainWrapper,
  TextWrapper,
  LogoContainer,
  Image,
  Wrapper,
  InputWrapper,
  Input,
  IconWrapper,
  IconContainer,
  IconImage,
  SendButton,
  SendArrow,
} from 'styles/Message/SendMessage'
import Profile from 'assets/images/profileImage.png'
import Mic from 'assets/images/mic.png'
import Gallery from 'assets/images/gallery.png'
import Send from 'assets/images/send.png'
const SendMessage = () => (
  <MainWrapper>
    <TextWrapper>
      <LogoContainer>
        <Image src={Profile} alt="Picture"></Image>
      </LogoContainer>
      <Wrapper>
        <InputWrapper>
          <Input type="text" placeholder="Write Something here...." />
          <IconWrapper>
            <IconContainer>
              <IconImage src={Mic} alt="Try to speak..." />
              <IconImage src={Gallery} alt="Loading gallery..." />
            </IconContainer>
            <SendButton>
              <SendArrow src={Send} alt="Sending message..."></SendArrow>
            </SendButton>
          </IconWrapper>
        </InputWrapper>
      </Wrapper>
    </TextWrapper>
  </MainWrapper>
)

export default SendMessage
