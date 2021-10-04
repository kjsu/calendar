import { Schedule } from '~/interfaces/calendar'

const getSomeday = (day: number) => {
  const today = new Date()
  if (day === 0) {
    return today.toISOString().split('T')[0]
  } else {
    const someday = new Date(today.setDate(today.getDate() + day))
    return someday.toISOString().split('T')[0]
  }
}

export const dummyScheduleCompany: Schedule[] = [
  {
    id: 'c001',
    type: '팀 회의',
    startDate: getSomeday(0) + 'T10:00:00',
    endDate: getSomeday(0) + 'T11:30:00',
    color: '#0042ED',
  },
  {
    id: 'c002',
    type: '팀 회의',
    startDate: getSomeday(1) + 'T14:00:00',
    endDate: getSomeday(1) + 'T18:00:00',
    color: '#0042ED',
  },
  {
    id: 'c003',
    type: '팀 회의',
    startDate: getSomeday(3) + 'T15:30:00',
    endDate: getSomeday(3) + 'T16:30:00',
    color: '#0042ED',
  },
  {
    id: 'c004',
    type: '호프데이',
    startDate: getSomeday(2) + 'T18:30:00',
    endDate: getSomeday(2) + 'T21:00:00',
    color: '#EDA900',
  },
  {
    id: 'c005',
    type: '전체 회의',
    startDate: getSomeday(0) + 'T15:00:00',
    endDate: getSomeday(0) + 'T17:00:00',
    color: '#009300',
  },
  {
    id: 'c006',
    type: '전체 회의',
    startDate: getSomeday(2) + 'T15:00:00',
    endDate: getSomeday(2) + 'T17:00:00',
    color: '#009300',
  },
  {
    id: 'c007',
    type: '업무 지원',
    startDate: getSomeday(1) + 'T09:00:00',
    endDate: getSomeday(1) + 'T11:30:00',
    color: '#5F00FF',
  },
  {
    id: 'c008',
    type: '업무 지원',
    startDate: getSomeday(3) + 'T09:00:00',
    endDate: getSomeday(3) + 'T11:30:00',
    color: '#5F00FF',
  },
]