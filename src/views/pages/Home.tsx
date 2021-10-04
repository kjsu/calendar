import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import calendarAction from '~/actions/calendarAction'
import Calendar from '~/views/components/Calendar'
import { schedulesAtom } from '~/recoil/calendarAtom'

const Home: React.FC = () => {
  const [schedules, setSchedules] = useRecoilState(schedulesAtom)
  const getSchedules = useRecoilValue(schedulesAtom)

  useEffect(() => {
    const schedules = calendarAction.getSchedules({ type: 'COMPANY' })
    setSchedules(schedules)
  }, [])

  useEffect(() => {
    const test = getSchedules
    debugger
  }, [schedules])

  return (
    <>
      <Calendar></Calendar>
    </>
  )
}

export default Home
