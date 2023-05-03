import { useNavigate, BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import routes from 'constants/routes'
import React, { useEffect } from 'react'
import PrivateRoute from './AdminRoutes/Private'
import { isLogin } from 'components/Utils'
import { AdminDashboardRoute } from 'constants/routes'

const PublicRoute = ({ component: RouteComponent, restricted }: any) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin() && !restricted) {
      navigate(AdminDashboardRoute.path)
    }
  }, [])
  return <RouteComponent />
}

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {routes.map((route, index) => {
          const { component: Component, path, restricted } = route

          return (
            <Route
              key={index}
              path={path}
              element={
                restricted ? (
                  <PrivateRoute component={Component} />
                ) : (
                  <PublicRoute restricted={false} component={Component} />
                )
              }
            ></Route>
          )
        })}
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes
