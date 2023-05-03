import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLogin } from 'components/Utils'
export const PublicRoute = ({ component: RouteComponent, restricted }: any) => {
  if (isLogin() && !restricted) {
    return <Navigate to="/admindash" />
  }

  return <RouteComponent />
}

export default PublicRoute
