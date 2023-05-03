import { Navigate } from 'react-router-dom'
import { isLogin } from 'components/Utils'

const PrivateRoute = ({ component: RouteComponent }: any) => {
  if (isLogin()) {
    return <RouteComponent />
  }

  return <Navigate to="/login" />
}

export default PrivateRoute
