import PropTypes from 'prop-types'

import { Route } from 'react-router-dom'
import { routes } from 'Routes'
import useAuth from 'hooks/useAuth'

import * as service from 'service'

const DefaultComponent = ({ children }) => <>{children}</>

const RouteWithLayout = ({
  auth,
  layout,
  provider,
  component: Component,
  redirect = false,
  ...rest
}) => {
  const Layout = layout || DefaultComponent
  const Provider = provider || DefaultComponent
  const isAuthenticated = service.RicochetAPI.auth.isAuthenticated()
  const { loadOut, isLoading } = useAuth()

  if (isAuthenticated) {
    if (!auth && redirect && !isLoading) {
      service.history.push(routes.home)
      return null
    }
  } else {
    if (auth) {
      service.RicochetAPI.auth.logout()
      loadOut()
      return null
    }
  }

  const renderRoute = (matchProps) => {
    return (
      <Layout>
        <Provider component={Provider}>
          <Component {...matchProps} />
        </Provider>
      </Layout>
    )
  }

  return <Route {...rest} render={(matchProps) => renderRoute(matchProps)} />
}

RouteWithLayout.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
}

export default RouteWithLayout
