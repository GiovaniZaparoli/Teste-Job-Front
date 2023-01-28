import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'
import { RouteWithLayout } from './components'
import { Auth as AuthLayout, Main as MainLayout } from './layouts'

import {
  Login,
  Home,
  SignUp,
  NotFound,
  ForgotPassword,
  NewPassword,
} from 'views'

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
        path={routes.forgotPassword}
        component={ForgotPassword}
        layout={AuthLayout}
        redirect
        exact
      />
      <RouteWithLayout
        path={routes.newPassword}
        component={NewPassword}
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

      <Route component={NotFound} exact path={routes.notFound} />
      <Redirect to={routes.notFound} />
    </Switch>
  )
}

export const routes = {
  root: '/',
  home: '/home',
  signUp: '/sign-up',
  notFound: '/not-found',
  forgotPassword: '/reset-password',
  newPassword: '/new-password',
}

export default Routes
