import memberService from '~/services/memberService'
import { RequestLoginInfo } from '~/interfaces/login'

const deleteMember = (request: RequestLoginInfo) => {
  memberService.deleteNaverOAuth(request.accessToken)
}

export default {
  deleteMember,
}
