import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Menu,
  List,
  Nav,
  ButtonWrapper,
  HamburgerMenu,
  ListItems,
  LogoContainer,
  MenuButton,
  MainContainer,
  EmptyIndex,
} from 'styles/Navbar'
import logo from 'assets/images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from 'components/Button'
import Modal from 'components/Modal'
import { SignupRoute, LoginRoute, HomepageRoute } from 'constants/routes'
import data from 'components/Navbar/data'
import { CreateAccountWrapper } from 'styles/Login'

interface IHeaderProps {
  scrollView(refName: string): void
}

const Navbar = ({ scrollView }: IHeaderProps) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Nav>
        <EmptyIndex />
        <LogoContainer onClick={() => navigate(HomepageRoute.path)} src={logo} />
        <Menu>
          <List>
            {data?.map((item, index) => (
              <ListItems key={index} className="active" onClick={() => scrollView(item.title)}>
                {item.title}
              </ListItems>
            ))}
          </List>
        </Menu>
        <ButtonWrapper className="createAccount">
          <Button handleClick={() => navigate(LoginRoute.path)} label="Login" />
          <CreateAccountWrapper>
            <div>Not registered yet?</div>
            <Button handleClick={() => navigate(SignupRoute.path)} label="Signup" variant="text" />
          </CreateAccountWrapper>
        </ButtonWrapper>

        <HamburgerMenu>
          <MenuButton
            onClick={() => {
              setOpenModal(!openModal)
              setShowMediaIcons(!showMediaIcons)
            }}
          >
            <GiHamburgerMenu />
          </MenuButton>
          {openModal && <Modal />}
        </HamburgerMenu>
      </Nav>
    </MainContainer>
  )
}

export default Navbar
