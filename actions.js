export const CHANGE_CALENDAR = 'CHANGE_CALENDAR'
export const CHANGE_DATE = 'CHANGE_DATE'

export const Calendars = {
  NEW: "new",
  OLD: "old"
}

export function changeCalendar(calendar) {
  return {type: CHANGE_CALENDAR, calendar}
}

export function changeDate(date) {
  return {type: CHANGE_CALENDAR, date}
}