import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'
import Main from '~/views/pages/Main'
import Dashboard from '~/views/pages/Dashboard'

export const MAIN = '/'
export const HOME = '/home'
export const MUI_DASHBOARD = '/dashboard'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={MAIN} component={Main} />
      <Route exact path={HOME} component={Home} />
      <Route exact path={MUI_DASHBOARD} component={Dashboard} />
    </Switch>
  </Suspense>
)

export default Router
