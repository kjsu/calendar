import { deleteNaverOAuthToken } from '~/apis/member'

const deleteNaverOAuth = (accessToken: string) => {
  deleteNaverOAuthToken(accessToken)
}

export default {
  deleteNaverOAuth,
}
