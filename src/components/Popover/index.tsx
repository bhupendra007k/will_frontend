import 'antd/dist/antd.css'
import 'index.css'
import { Popover } from 'antd'
import User from 'assets/images/profilePic.png'
import Profile from 'assets/images/adminUser.png'
import Password from 'assets/images/adminPassword.png'
import LogOut from 'assets/images/adminLogOut.png'
import { ProfileImage, PopOverWrapper, SubWrapper, Logo, Content } from 'styles/Taskbar'

const content = (
  <PopOverWrapper>
    <SubWrapper>
      <Logo src={Profile} alt="Profile Image" />
      <Content>Profile</Content>
    </SubWrapper>
    <SubWrapper>
      <Logo src={Password} alt="Profile Image" />
      <Content>Password</Content>
    </SubWrapper>
    <SubWrapper>
      <Logo src={LogOut} alt="Profile Image" />
      <Content>LogOut</Content>
    </SubWrapper>
  </PopOverWrapper>
)

const PopOver: React.FC = () => (
  <Popover placement="bottomRight" content={content} trigger="click">
    <ProfileImage src={User} alt="user" />
  </Popover>
)

export default PopOver
