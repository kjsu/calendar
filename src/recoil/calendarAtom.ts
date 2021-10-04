import { atom } from 'recoil'
import { Schedule } from '~/interfaces/calendar'

const initialSchedulesAtom: Schedule[] = []

export const schedulesAtom = atom({
  key: 'schedules',
  default: initialSchedulesAtom,
})
