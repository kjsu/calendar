import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'
import Main from '~/views/pages/Main'

export const MAIN = '/'
export const HOME = '/home'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={MAIN} component={Main} />
      <Route exact path={HOME} component={Home} />
    </Switch>
  </Suspense>
)

export default Router
