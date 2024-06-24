enum WeekDay {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY 
};

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.SATURDAY || day === WeekDay.SUNDAY;
};