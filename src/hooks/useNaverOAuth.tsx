import React, { useRef, ReactElement } from 'react'
import useScript from '~/hooks/useScript'
import { NaverLogin, NaverLoginRequest, NaverLoginButtonIconType } from '~/interfaces/login'
import { NaverOAuthInfo } from '~/utils/constant'
import { useRecoilState } from 'recoil'
import { isLoginAtom } from '~/recoil/memberAtom'

type NaverOAuth = [ReactElement, Function, Function, Function]

function useNaverOAuth(callbackLoginSuccess: Function): NaverOAuth {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
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
    alert(status)
    setIsLogin(status)
    if (status && naverLogin.current) {
      callbackLoginSuccess(naverLogin.current.user)
    }
  }

  const logout = (url: string) => {
    naverLogin.current?.logout()
    // naverLogin.current?.getLoginStatus(getLoginStatusCallback) // 동작 안 함
    location.replace(url)
  }

  const getAccessToken = () => { // 잘못된 코드, 결국 현재 url의 hash를 참조함
    return getHashValue(location.hash, 'access_token')
  }

  const getHashValue = (hash: string, param: string): string => {
    const result: any = {}
    hash.substr(1, hash.length).split('&').map((e) => {
      const keyValue = e.split('=')
      result[keyValue[0]] = keyValue[1]
    })
    return result[param]
  }

  const getLoginStatus = () => {
    naverLogin.current?.getLoginStatus(getLoginStatusCallback) // 동작 안 함
  }

  return [<div id="naverIdLogin"></div>, logout, getAccessToken, getLoginStatus]
}

export default useNaverOAuth
