/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

type DaysCounterIslandProps = {
  startDate: string;
};

const MILLISECONDS_PER_DAY = 86400000;

const calculateCounterValue = (startDate: string): string => {
  const argentinaToday = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires"
  }).format(new Date());

  const startTime = Date.parse(`${startDate}T00:00:00Z`);
  const currentTime = Date.parse(`${argentinaToday}T00:00:00Z`);

  if (Number.isNaN(startTime) || Number.isNaN(currentTime)) return "1";

  const elapsedDays = Math.floor((currentTime - startTime) / MILLISECONDS_PER_DAY);
  return String(Math.max(1, elapsedDays + 1));
};

export default function DaysCounterIsland({ startDate }: DaysCounterIslandProps) {
  const [counterValue, setCounterValue] = useState<string | null>(null);

  useEffect(() => {
    setCounterValue(calculateCounterValue(startDate));
  }, [startDate]);

  return (
    <p className="counter" aria-live="polite">
      {counterValue === null ? (
        <>
          <strong className="counter-loader" aria-hidden="true">•••</strong>
          <span>Calculando días...</span>
        </>
      ) : (
        <>
          <strong>{counterValue}</strong>
          <span>Días desde el primer día de Coudet</span>
        </>
      )}
    </p>
  );
}
