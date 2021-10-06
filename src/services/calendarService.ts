import { schedules } from '~/apis/calendar'
import { GetScheduleRequestParams } from '~/interfaces/calendar'

const getSchedules = (request: GetScheduleRequestParams) => {
  return schedules(request)
}

export default {
  getSchedules,
}
