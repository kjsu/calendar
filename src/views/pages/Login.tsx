import React, { useEffect } from 'react'
import useNaverOAuth from '~/hooks/useNaverOAuth'
import { NaverUserInfo } from '~/interfaces/login'
import { Button, Stack } from '@mui/material'

const Login: React.FC = () => {
  const callbackLoginSuccess = (naverUserInfo: NaverUserInfo) => {
    // action
  }
  const [NaverLoginElement, isLogin, logout, erase] = useNaverOAuth(callbackLoginSuccess)

  useEffect(() => {

  }, [])

  return (
    <>
      {isLogin || NaverLoginElement}
      {true && (
        <Stack direction="row" spacing={1} mb={1}>
          <Button variant="outlined" size="small" onClick={(e) => logout('http://localhost.com:3030/login')}>로그아웃</Button>
          <Button variant="outlined" size="small" onClick={(e) => erase('http://localhost.com:3030/login')}>탈퇴</Button>
        </Stack>
      )}
    </>
  )
}

export default Login
