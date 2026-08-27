const MILLISECONDS_PER_DAY = 86400000;
const ARGENTINA_TIME_ZONE = "America/Argentina/Buenos_Aires";

/** Current calendar date in Buenos Aires, as `YYYY-MM-DD`. */
export const getArgentinaDate = (): string =>
  new Intl.DateTimeFormat("en-CA", { timeZone: ARGENTINA_TIME_ZONE }).format(new Date());

/** Day 1 is the start date itself, so the count is inclusive. */
export const calculateDaysSince = (startDate: string, todayDate: string = getArgentinaDate()): number => {
  const startTime = Date.parse(`${startDate}T00:00:00Z`);
  const currentTime = Date.parse(`${todayDate}T00:00:00Z`);

  if (Number.isNaN(startTime) || Number.isNaN(currentTime)) return 1;

  return Math.max(1, Math.floor((currentTime - startTime) / MILLISECONDS_PER_DAY) + 1);
};
