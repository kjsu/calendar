import React, { ReactNode, useState, useRef, useEffect, ReactElement } from 'react'
import Calendar, { IOptions, ICalendarInfo, ISchedule, TZDate } from 'tui-calendar'
import { ViewType, MoveType, DateRange, Schedule } from '~/interfaces/calendar'
import { useRecoilValue } from 'recoil'
import { schedulesAtom } from '~/recoil/calendarAtom'
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

interface Props {
  // schedules?: Schedule[]
  // mode?: CalendarMode
  // onChangeCalendarDateRange?: (range: DateRange) => void
  onCreateSchedule?: (schedule: Schedule) => void
  onUpdateSchedule?: (schedule: Schedule) => void
  onDeleteSchedule?: (schedule: Schedule) => void
}

const ToastUICalendar: React.FC<Props> = ({
  // schedules,
  // mode,
  // onChangeCalendarDateRange,
  onCreateSchedule,
  onUpdateSchedule,
  onDeleteSchedule,
}) => {
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
      // const schedule: Schedule = {
      //   startDate: (scheduleData.start as TZDate).toDate()?.toISOString(),
      //   endDate: (scheduleData.end as TZDate).toDate()?.toISOString(),
      // }
      // onCreateSchedule(convertToastUIScheduleToSchedule(schedule))
    }

    const beforeUpdateSchedule = (event: any) => {
      const { schedule, changes } = event
      calendar.current?.updateSchedule(schedule.id, schedule.calendarId, changes) // 이 안에 뭐들어있는지 봐야함
    }

    const beforeDeleteSchedule = (scheduleData: any) => {
      const { schedule } = scheduleData
      calendar.current?.deleteSchedule(schedule.id, schedule.calendarId)
    }

    calendar.current?.on('beforeCreateSchedule', beforeCreateSchedule) // event 등록
    calendar.current?.on('beforeUpdateSchedule', beforeUpdateSchedule)
    calendar.current?.on('beforeDeleteSchedule', beforeDeleteSchedule)
  }

  // event handler
  const createSchedules = (schedules: ISchedule[]) => {
    calendar.current?.clear()
    calendar.current?.createSchedules(schedules)
  }

  const getCalendarDateRange = (): DateRange => {
    return {
      start: calendar.current?.getDateRangeStart().toDate().toISOString(),
      end: calendar.current?.getDateRangeEnd().toDate().toISOString(),
    }
  }

  const move = (type: MoveType) => {
    calendar.current?.[type]()
    // onChangeCalendarDateRange(getCalendarDateRange())
  }

  const changeView = () => {
    if (calendar.current?.getViewName() === ViewType.WEEK) {
      calendar.current?.changeView(ViewType.MONTH, true)
    } else {
      calendar.current?.changeView(ViewType.WEEK, true)
    }
    // onChangeCalendarDateRange(getCalendarDateRange())
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
        // id: Math.floor(Math.random() * 100000).toString(),
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

  const convertToastUIScheduleToSchedule = (schedule: ISchedule) => {
    // const result: Schedule = {
    //   scheduleId: schedule.id,
    //   range: {
    //     start: (schedule.start as TZDate).toDate()?.toISOString(),
    //     end: (schedule.end as TZDate).toDate()?.toISOString(),
    //   },
    // }
    // return result
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
      <button
        onClick={() => {
          move(MoveType.PREV)
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          move(MoveType.NEXT)
        }}
      >
        다음
      </button>
      <button
        onClick={() => {
          move(MoveType.TODAY)
        }}
      >
        오늘
      </button>
      <button onClick={changeView}>월간/주간 토글</button>
      <div id="calendar" style={{ height: '640px' }}></div>
    </>
  )
}

export default ToastUICalendar
