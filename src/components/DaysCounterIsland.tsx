import { useEffect, useState } from "preact/hooks";
import { calculateDaysSince } from "../lib/days-counter";

type DaysCounterIslandProps = {
  startDate: string;
  /** Server-rendered value, so crawlers get the answer without running JS. */
  initialValue: number;
};

export default function DaysCounterIsland({ startDate, initialValue }: DaysCounterIslandProps) {
  const [counterValue, setCounterValue] = useState(initialValue);

  // Corrects the build-time value against the visitor's real "today".
  useEffect(() => {
    setCounterValue(calculateDaysSince(startDate));
  }, [startDate]);

  return (
    <p className="counter" aria-live="polite">
      <strong>{counterValue}</strong>
      <span>Días desde el primer día de Coudet</span>
    </p>
  );
}
