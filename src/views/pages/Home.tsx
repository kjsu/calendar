import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import calendarAction from '~/actions/calendarAction'
import Calendar from '~/views/components/Calendar'
import { schedulesAtom } from '~/recoil/calendarAtom'
import { useParams } from 'react-router-dom'

type HomeParams = {
  type: string;
};

const Home: React.FC = () => {
  const [schedules, setSchedules] = useRecoilState(schedulesAtom)
  const { type } = useParams<HomeParams>()

  useEffect(() => {
    if (type) {
      const schedules = calendarAction.getSchedules({ type: type?.toUpperCase() })
      setSchedules(schedules)
    }
  }, [type])

  return (
    <>
      <Calendar></Calendar>
    </>
  )
}

export default Home
