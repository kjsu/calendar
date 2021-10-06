import { Schedule } from '~/interfaces/calendar'

const createSomeday = (day: number) => {
  const today = new Date()
  const someday = new Date(today.setDate(today.getDate() + day))
  return someday.toISOString().split('T')[0]
}

export const dummyCompanySchedules: Schedule[] = [
  {
    id: 'c001',
    type: '팀 회의',
    startDate: createSomeday(0) + 'T10:00:00',
    endDate: createSomeday(0) + 'T11:30:00',
    color: '#0042ED',
  },
  {
    id: 'c002',
    type: '팀 회의',
    startDate: createSomeday(1) + 'T14:00:00',
    endDate: createSomeday(1) + 'T18:00:00',
    color: '#0042ED',
  },
  {
    id: 'c003',
    type: '팀 회의',
    startDate: createSomeday(3) + 'T15:30:00',
    endDate: createSomeday(3) + 'T16:30:00',
    color: '#0042ED',
  },
  {
    id: 'c004',
    type: '회식',
    startDate: createSomeday(2) + 'T18:30:00',
    endDate: createSomeday(2) + 'T21:00:00',
    color: '#EDA900',
  },
  {
    id: 'c005',
    type: '전체 회의',
    startDate: createSomeday(0) + 'T15:00:00',
    endDate: createSomeday(0) + 'T17:00:00',
    color: '#009300',
  },
  {
    id: 'c006',
    type: '전체 회의',
    startDate: createSomeday(2) + 'T15:00:00',
    endDate: createSomeday(2) + 'T17:00:00',
    color: '#009300',
  },
  {
    id: 'c007',
    type: '업무 지원',
    startDate: createSomeday(1) + 'T09:00:00',
    endDate: createSomeday(1) + 'T11:30:00',
    color: '#C900A7',
  },
  {
    id: 'c008',
    type: '업무 지원',
    startDate: createSomeday(3) + 'T09:00:00',
    endDate: createSomeday(3) + 'T11:30:00',
    color: '#C900A7',
  },
]

export const dummyPersonalSchedules: Schedule[] = [
  {
    id: 'p001',
    type: '스터디',
    startDate: createSomeday(0) + 'T10:00:00',
    endDate: createSomeday(0) + 'T17:00:00',
    color: '#8324FF',
  },
  {
    id: 'p002',
    type: '스터디',
    startDate: createSomeday(2) + 'T10:00:00',
    endDate: createSomeday(2) + 'T17:00:00',
    color: '#8324FF',
  },
  {
    id: 'p003',
    type: '스터디',
    startDate: createSomeday(4) + 'T10:00:00',
    endDate: createSomeday(4) + 'T17:00:00',
    color: '#8324FF',
  },
  {
    id: 'p004',
    type: '동창회',
    startDate: createSomeday(1) + 'T16:00:00',
    endDate: createSomeday(1) + 'T22:00:00',
    color: '#98C138',
  },
  {
    id: 'p005',
    type: '학원',
    startDate: createSomeday(1) + 'T08:00:00',
    endDate: createSomeday(1) + 'T12:30:00',
    color: '#00A2C9',
  },
  {
    id: 'p006',
    type: '학원',
    startDate: createSomeday(3) + 'T08:00:00',
    endDate: createSomeday(3) + 'T12:30:00',
    color: '#00A2C9',
  },
]