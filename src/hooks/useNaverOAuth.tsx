import React, { useState, useRef, ReactElement } from 'react'
import useScript from '~/hooks/useScript'
import { NaverLogin, NaverLoginRequest, NaverLoginButtonIconType } from '~/interfaces/login'
import { NaverOAuthInfo } from '~/utils/constant'

type NaverOAuth = [ReactElement, boolean, Function, Function]

function useNaverOAuth(callbackLoginSuccess: Function): NaverOAuth {
  const [isLogin, setIsLogin] = useState(false)
  const naverLogin = useRef<NaverLogin>()

  const callback = () => {
    window.name = 'opener'

    const request: NaverLoginRequest = {
      clientId: NaverOAuthInfo.CLIENT_ID,
      callbackUrl: NaverOAuthInfo.CALLBACK_URL,
      isPopup: true,
      loginButton: {
        color: 'green',
        height: 38,
        type: NaverLoginButtonIconType.ORIGINAL,
      },
    }
    naverLogin.current = new window.naver.LoginWithNaverId(request)
    naverLogin.current?.init()
    naverLogin.current?.getLoginStatus(getLoginStatusCallback)
  }

  useScript('https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', 'naverSdk', callback)

  const getLoginStatusCallback = (status: boolean) => {
    setIsLogin(status)
    if (status && naverLogin.current) {
      callbackLoginSuccess(naverLogin.current.user)
    }
  }

  const logout = (replaceUrl: string) => {
    naverLogin.current?.logout()
    location.replace(replaceUrl)
  }

  const erase = (replaceUrl: string) => {
    naverLogin.current?.logout()
    const accessToken = getHashValue(location.hash, 'access_token')
    window.open(
      `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=fWZ2aJATS_TirUlWZHn9&client_secret=7GuWcIsJiF&access_token=${accessToken}&service_provider=NAVER`,
      'erase',
    )
    location.replace(replaceUrl)
  }

  const getHashValue = (hash: string, param: string): string => {
    const result: any = {}
    hash.substr(1, hash.length).split('&').map((e) => {
      const keyValue = e.split('=')
      result[keyValue[0]] = keyValue[1]
    })
    return result[param]
  }

  return [<div id="naverIdLogin"></div>, isLogin, logout, erase]
}

export default useNaverOAuth
