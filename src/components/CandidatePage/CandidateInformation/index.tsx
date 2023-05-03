import {
  EditWrapper,
  Left,
  Right,
  NameHeading,
  EditHeading,
  UsernameHeading,
  LeftContainer,
  RightContainer,
  LeftWrapper,
  RightWrapper,
} from 'styles/CandidateInformation'

const Information = () => {
  return (
    <div>
      <EditWrapper>
        <Left>
          <LeftContainer>
            <LeftWrapper>
              <NameHeading> Name:</NameHeading>
              <NameHeading>Mobile Phone:</NameHeading>
              <NameHeading> Current City:</NameHeading>
            </LeftWrapper>
            <RightWrapper>
              <EditHeading>Kamna</EditHeading>
              <EditHeading>+91 9368762229</EditHeading>
              <EditHeading>Chandigarh</EditHeading>
            </RightWrapper>
          </LeftContainer>
        </Left>
        <Right>
          <RightContainer>
            <LeftWrapper>
              <UsernameHeading>Username:</UsernameHeading>
              <UsernameHeading>Email:</UsernameHeading>
              <UsernameHeading>Country:</UsernameHeading>
            </LeftWrapper>
            <RightWrapper>
              <EditHeading>Kamna</EditHeading>
              <EditHeading>Kamna@gmail.com</EditHeading>
              <EditHeading>India</EditHeading>
            </RightWrapper>
          </RightContainer>
        </Right>
      </EditWrapper>
    </div>
  )
}

export default Information
