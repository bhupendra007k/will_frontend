import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopOver from 'components/Popover'
import Inbox from 'components/Inbox'
import Notification from 'components/Notification'
import MenuIcon from 'assets/images/menu.png'
import Search from 'assets/images/iconSearchAdmin.png'
import Bell from 'assets/images/bellIcon.png'

import {
  MainContainer,
  ImageIcon,
  LeftSection,
  Heading,
  MiddleSection,
  Input,
  Icon,
  SearchBar,
  RightSection,
  ImageSection,
  Btn,
  ProfileSection,
  UserData,
  ProfileHeading,
  ProfileParagraph,
  BellImg,
} from 'styles/Taskbar'
import { ProfileRoute } from 'constants/routes'

const Navbar = () => {
  const navigate = useNavigate()
  const [Messages, setMessages] = useState(false)

  const [Notifications, setNotifications] = useState(false)
  const openNotification = () => {
    setNotifications(true)
  }

  return (
    <MainContainer>
      <LeftSection>
        <ImageIcon src={MenuIcon} alt="menu" />
        <Heading>Welcome Shivam!</Heading>
      </LeftSection>
      <MiddleSection>
        <SearchBar>
          <Input type="text" placeholder="Search something here" />
          <Icon>
            <img src={Search} />
          </Icon>
        </SearchBar>
      </MiddleSection>
      <RightSection>
        <ImageSection>
          <Btn onClick={openNotification}>
            <BellImg src={Bell} alt="notification" />
          </Btn>
          <ProfileSection>
            <UserData>
              <ProfileHeading onClick={() => navigate(ProfileRoute.path)}>Shivam</ProfileHeading>
              <ProfileParagraph>Admin</ProfileParagraph>
            </UserData>

            <PopOver />
          </ProfileSection>

          {Messages && (
            <div>
              <Inbox set={setMessages} />
            </div>
          )}
          {Notifications && (
            <div>
              <Notification set={setNotifications} />
            </div>
          )}
        </ImageSection>
      </RightSection>
    </MainContainer>
  )
}

export default Navbar
