import React, { useRef, useEffect } from 'react'
import Calendar, { IOptions, ICalendarInfo, ISchedule, TZDate } from 'tui-calendar'
import { ViewType, MoveType, DateRange, Schedule } from '~/interfaces/calendar'
import { useRecoilValue } from 'recoil'
import { schedulesAtom } from '~/recoil/calendarAtom'
import { Button, Stack } from '@mui/material';
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

interface Props {
}

const ToastUICalendar: React.FC<Props> = () => {
  const calendar = useRef<Calendar>()
  const schedules = useRecoilValue(schedulesAtom)

  const initialize = () => {
    const options: IOptions = {
      defaultView: 'week',
      useCreationPopup: true,
      useDetailPopup: true,
    }
    calendar.current = new Calendar('#calendar', options) // tui 캘린더 객체 생성

    const beforeCreateSchedule = (scheduleData: ISchedule) => {
      const schedule = {
        calendarId: scheduleData.calendarId,
        id: String(Math.random() * 100000000000000000),
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? 'allday' : 'time',
        location: scheduleData.location
      };

      calendar.current?.createSchedules([schedule]);
    }

    const beforeUpdateSchedule = (event: any) => {
      const { schedule, changes } = event
      calendar.current?.updateSchedule(schedule.id, schedule.calendarId, changes)
    }

    const beforeDeleteSchedule = (scheduleData: any) => {
      const { schedule } = scheduleData
      calendar.current?.deleteSchedule(schedule.id, schedule.calendarId)
    }

    calendar.current?.on('beforeCreateSchedule', beforeCreateSchedule) // event 등록
    calendar.current?.on('beforeUpdateSchedule', beforeUpdateSchedule)
    calendar.current?.on('beforeDeleteSchedule', beforeDeleteSchedule)
  }

  const createSchedules = (schedules: ISchedule[]) => {
    calendar.current?.clear()
    calendar.current?.createSchedules(schedules)
  }

  const move = (type: MoveType) => {
    calendar.current?.[type]()
  }

  const changeView = () => {
    if (calendar.current?.getViewName() === ViewType.WEEK) {
      calendar.current?.changeView(ViewType.MONTH, true)
    } else {
      calendar.current?.changeView(ViewType.WEEK, true)
    }
  }

  const generateCalendarInfo = (schedules: Schedule[]) => {
    const uniqueTypes = new Set<string>()
    schedules.forEach((e) => {
      uniqueTypes.add(e.type)
    })

    const uniqueSchedules: Schedule[] = []
    uniqueTypes.forEach((type) => {
      const found = schedules.find((schedule) => {
        return schedule.type === type
      })
      uniqueSchedules.push(found)
    })

    const calendarInfo: ICalendarInfo[] = []
    uniqueSchedules.forEach((schedule) => {
      calendarInfo.push({
        id: schedule.type,
        name: schedule.type,
        color: '#ffffff',
        bgColor: schedule.color,
        dragBgColor: schedule.color,
        borderColor: schedule.color,
      })
    })

    calendar.current?.setCalendars(calendarInfo)
  }

  const convertSchedulesToToastUISchedules = (schedules: Schedule[]): ISchedule[] => {
    generateCalendarInfo(schedules)

    const toastUISchedules: ISchedule[] = []
    schedules.map((schedule) => {
      toastUISchedules.push({
        id: schedule.id,
        calendarId: schedule.type,
        title: schedule.type,
        category: 'time',
        start: schedule.startDate,
        end: schedule.endDate,
      })
    })
    return toastUISchedules
  }

  useEffect(() => {
    initialize()
    return () => {
      calendar.current?.destroy()
    }
  }, [])

  useEffect(() => {
    schedules && createSchedules(convertSchedulesToToastUISchedules(schedules))
  }, [schedules])

  return (
    <>
      <Stack direction="row" spacing={1} mb={1}>
        <Button variant="outlined" size="small" onClick={() => { move(MoveType.PREV) }}>이전</Button>
        <Button variant="outlined" size="small" onClick={() => { move(MoveType.NEXT) }}>다음</Button>
        <Button variant="outlined" size="small" onClick={() => { move(MoveType.TODAY) }}>오늘</Button>
        <Button variant="outlined" size="small" onClick={changeView}>월간/주간</Button>
      </Stack>
      <div id="calendar" style={{ height: '640px' }}></div>
    </>
  )
}

export default ToastUICalendar
