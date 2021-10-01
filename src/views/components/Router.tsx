import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'
import Dashboard from '~/views/pages/Dashboard'

export const HOME = '/'
export const DASHBOARD = '/dashboard'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route exact path={DASHBOARD} component={Dashboard} />
    </Switch>
  </Suspense>
)

export default Router
