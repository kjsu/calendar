import React, { useState, useEffect } from 'react'
import appAction from '~/actions/appAction'
import { BrowserRouter } from 'react-router-dom'
import Router from '~/views/components/Router'
import { RecoilRoot } from 'recoil'
import { RecoilExternalStatePortal } from './recoil/RecoilExternalStatePortal'

export interface AppConfig {
  ajax: object
}

interface Props {
  config: AppConfig
}

const App: React.FC<Props> = ({ config }) => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    appAction.initApp(config)
    setInit(true)
  }, [])

  if (!init) {
    return <></>
  }

  return (
    <>
      <RecoilRoot>
        <RecoilExternalStatePortal />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
