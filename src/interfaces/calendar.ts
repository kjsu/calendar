export enum CalendarMode {
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
  RESERVATION = 'RESERVATION',
}

export enum ViewType {
  WEEK = 'week',
  MONTH = 'month',
}

export enum MoveType {
  PREV = 'prev',
  NEXT = 'next',
  TODAY = 'today',
}

export enum ScheduleStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
}

export interface DateRange {
  start: string
  end: string
}

export interface FetchScheduleRequestParams {
  range: DateRange
  id?: string
}

export interface Schedule {
  scheduleId?: string
  nickname?: string
  status?: ScheduleStatus
  startDate: string // number로 수정 예정
  endDate: string // number로 수정 예정
  color?: string
}
