export const departureTimeFilters = [
  {
    id: "early-morning",
    title: "صبح زود",
    from: "01:00",
    to: "08:00",
  },
  {
    id: "morning",
    title: "صبح",
    from: "08:01",
    to: "12:00",
  },
  {
    id: "noon",
    title: "ظهر",
    from: "12:01",
    to: "16:00",
  },
  {
    id: "afternoon",
    title: "عصر",
    from: "16:01",
    to: "20:00",
  },
  {
    id: "night",
    title: "شب",
    from: "20:01",
    to: "00:00",
  },
];

interface Flight {
  departureDateTime: string;
}

interface TimeFilter {
  id: string;
  title: string;
  from: string;
  to: string;
}

export function formatTime(time: string) {
  return time.split("T")[1]!.slice(0, 5);
}
export function formatTimeToPersian(time:string){
  const [hour, minute] = time.split(":")
  return `${hour} ساعت و ${minute} دقیقه`
}

function isTimeInRange(time: string, range: TimeFilter) {
  return range.from <= range.to
    ? time >= range.from && time <= range.to
    : time >= range.from || time <= range.to;
}

export function getMatchedDepartureTimeFilters(flights: Flight[]) {
  return departureTimeFilters.filter((range) =>
    flights.some((flight) =>
      isTimeInRange(formatTime(flight.departureDateTime), range),
    ),
  );
}

export function isDepartureTimeInRange(
  departureDateTime: string,
  selectedRanges: string[],
) {
  if (!selectedRanges.length) {
    return true;
  }

  const time = formatTime(departureDateTime);

  return selectedRanges.some((rangeId) => {
    const range = departureTimeFilters.find(
      (filter) => filter.id === rangeId,
    );

    return range ? isTimeInRange(time, range) : false;
  });
}

export function filterFlightByTimeRange(
  flights: Flight[],
  selectedRanges: string[],
) {
  return flights.filter((flight) =>
    isDepartureTimeInRange(
      flight.departureDateTime,
      selectedRanges,
    ),
  );
}