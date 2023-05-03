import GoogleLogin from 'react-google-login'
import { GoogleWrapper } from 'styles/Login'

const GoogleAuth = () => {
  const responseGoogle = ({ response }: any) => {
    console.log(response)
  }

  return (
    <GoogleWrapper>
      <GoogleLogin
        className="GoogleLogin"
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        icon={true}
        buttonText="Continue with Google"
      />
    </GoogleWrapper>
  )
}

export default GoogleAuth
