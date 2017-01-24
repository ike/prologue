export const CHANGE_CALENDAR = 'CHANGE_CALENDAR'

export const Calendars = {
  NEW: "new",
  OLD: "old"
}

export function changeCalendar(calendar) {
  return {type: CHANGE_CALENDAR, calendar}
}