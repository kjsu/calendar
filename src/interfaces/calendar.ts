export enum ViewType {
  WEEK = 'week',
  MONTH = 'month',
}

export enum MoveType {
  PREV = 'prev',
  NEXT = 'next',
  TODAY = 'today',
}

export interface DateRange {
  start: string
  end: string
}

export interface GetScheduleRequestParams {
  range?: DateRange
  id?: string
  type: string
}

export interface Schedule {
  id: string
  type: string
  startDate: string
  endDate: string
  color: string
}
