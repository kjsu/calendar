import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import calendarAction from '~/actions/calendarAction'
import Calendar from '~/views/components/Calendar'
import { schedulesAtom } from '~/recoil/calendarAtom'

const Home: React.FC = () => {
  const [schedules, setSchedules] = useRecoilState(schedulesAtom)

  useEffect(() => {
    const schedules = calendarAction.getSchedules({ type: 'PERSONAL' })
    setSchedules(schedules)
  }, [])

  return (
    <>
      <Calendar></Calendar>
    </>
  )
}

export default Home
