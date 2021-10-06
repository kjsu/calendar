export enum ViewType {
  WEEK = 'week',
  MONTH = 'month',
}

export enum MoveType {
  PREV = 'prev',
  NEXT = 'next',
  TODAY = 'today',
}

export interface GetScheduleRequestParams {
  id?: string
  startDate?: string
  endDate?: string
  type: string
}

export interface Schedule {
  id: string
  type: string
  startDate: string
  endDate: string
  color: string
}
