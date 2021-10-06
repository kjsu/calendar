import { AxiosResponse } from 'axios'
import ajax from '~/utils/ajax'
import { GetScheduleRequestParams, Schedule } from '~/interfaces/calendar'
import { dummyCompanySchedules, dummyPersonalSchedules } from './dummy'

export const schedules = (request: GetScheduleRequestParams) => {
  // const result: AxiosResponse<Schedule[]> = await ajax.get(`/schedule?id=${request.id}`)
  // return result?.data

  let result: Schedule[]
  switch (request.type) {
    case 'COMPANY':
      result = dummyCompanySchedules
      break;
    case 'PERSONAL':
      result = dummyPersonalSchedules
      break;
  }

  return result
}