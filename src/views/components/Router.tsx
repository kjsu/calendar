import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'
import Dashboard from '~/views/pages/Dashboard'
import Login from '~/views/pages/Login'
import LoginNaverCallback from '~/views/pages/LoginNaverCallback'

export const HOME = '/'
export const LOGIN = '/login'
export const LOGIN_NAVER_CALLBACK = '/login/callback'
export const DASHBOARD = '/dashboard'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={LOGIN_NAVER_CALLBACK} component={LoginNaverCallback} />
      <Route exact path={HOME} component={Home} />
      <Route exact path="/:type" component={Home} />
      <Route exact path={DASHBOARD} component={Dashboard} />
    </Switch>
  </Suspense>
)

export default Router
