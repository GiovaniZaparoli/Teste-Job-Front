import React from 'react'
import { include } from 'named-urls'

import { Switch, Redirect, Route } from 'react-router-dom'
import { RouteWithLayout } from './components'
import { Auth as AuthLayout, Main as MainLayout } from './layouts'

import { Login, Home, SignUp } from 'views'

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        path={routes.root}
        component={Login}
        layout={AuthLayout}
        redirect
        exact
      />
      <RouteWithLayout
        path={routes.signUp}
        component={SignUp}
        layout={AuthLayout}
        redirect
        exact
      />
      <RouteWithLayout
        path={routes.home}
        component={Home}
        layout={MainLayout}
        animatedLoading
        exact
        auth
      />

      <Redirect to={routes.root} />
    </Switch>
  )
}

export const routes = {
  root: '/',
  home: '/home',
  signUp: '/sign-up',
}

export default Routes
