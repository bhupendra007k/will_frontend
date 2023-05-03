import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { AvatarContainer } from 'styles/Avatar'
interface IUser {
  displayProfile: {
    profilePicture: string
  }
}
const User = ({ displayProfile }: IUser) => (
  <>
    <AvatarContainer>
      <Avatar alt="UserImage" src={displayProfile?.profilePicture} size={120} icon={<UserOutlined />} />
    </AvatarContainer>
  </>
)

export default User
