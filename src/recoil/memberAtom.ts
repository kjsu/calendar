import { atom } from 'recoil'
import { RequestLoginInfo } from '~/interfaces/login'

const initialRequestLoginInfoAtom: RequestLoginInfo = {
  accessToken: ''
}

export const isLoginAtom = atom({
  key: 'isLogin',
  default: false,
})

export const requestLoginInfoAtom = atom({
  key: 'requestLoginInfo',
  default: initialRequestLoginInfoAtom,
})