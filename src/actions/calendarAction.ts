import { GetScheduleRequestParams } from '~/interfaces/calendar'
import calendarService from '~/services/calendarService'

const getSchedules = (request: GetScheduleRequestParams) => {
  return calendarService.getSchedules(request)
}

export default {
  getSchedules,
}
