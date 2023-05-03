import PrivateLayout from 'components/Layouts/privateLayout'
import Taskbar from 'components/Taskbar'
import CandidateProfile from 'pages/CandidatdeProfiletwo'
const ProfileEdit = () => {
  return (
    <PrivateLayout>
      <Taskbar />
      <CandidateProfile />
    </PrivateLayout>
  )
}

export default ProfileEdit
