import React, { useEffect } from 'react'
import calendarAction from '~/actions/calendarAction'
import Calendar from '~/views/components/Calendar'

const Home: React.FC = () => {
  useEffect(() => {
    const schedules = calendarAction.getSchedules({ type: 'COMPANY' })
  }, [])

  return (
    <>
      <Calendar></Calendar>
    </>
  )
}

export default Home
