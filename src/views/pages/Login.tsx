import React, { useEffect } from 'react'
import useNaverOAuth from '~/hooks/useNaverOAuth'
import { NaverUserInfo, RequestLoginInfo } from '~/interfaces/login'
import { NaverOAuthInfo } from '~/utils/constant'
import { Button, Stack } from '@mui/material'
import memberAction from '~/actions/memberAction'
import { useRecoilState } from 'recoil'
import { isLoginAtom } from '~/recoil/memberAtom'
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
  const history = useHistory()

  const callbackLoginSuccess = (naverUserInfo: NaverUserInfo) => {
  }
  const [NaverLoginElement, logout, getAccessToken, getLoginStatus] = useNaverOAuth(callbackLoginSuccess)

  const naverLogout = () => {
    logout(NaverOAuthInfo.REDIRECT_URL)
    // getLoginStatus()
    setIsLogin(false)
    history.push('/login')
  }

  const deleteMember = () => {
    const request: RequestLoginInfo = {
      accessToken: getAccessToken()
    }
    memberAction.deleteMember(request)
    logout(NaverOAuthInfo.REDIRECT_URL)
    // getLoginStatus()
    setIsLogin(false)
    history.push('/login')
  }

  useEffect(() => {

  }, [])

  return (
    <>
      {isLogin || NaverLoginElement}
      {isLogin && (
        <Stack direction="row" spacing={1} mb={1}>
          <Button variant="outlined" size="small" onClick={(e) => naverLogout()}>로그아웃</Button>
          <Button variant="outlined" size="small" onClick={(e) => deleteMember()}>탈퇴</Button>
        </Stack>
      )}
    </>
  )
}

export default Login
