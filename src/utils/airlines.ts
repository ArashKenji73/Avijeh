import type { FlightItem } from '@/types/Flight'

interface Airline {
  code: string | undefined
  title: string | undefined
}

export function getAirlinesFromFlights(
  flightsItem: FlightItem[],
): Airline[] {
  const airlines: Airline[] = []

  flightsItem.forEach((flight) => {
    const airline = {
      code: flight.flights[0]?.flightsSegments[0]?.airlineCode,
      title: flight.flights[0]?.flightsSegments[0]?.airlineTitle,
    }

    if (airline.code && !airlines.some((item) => item.code === airline.code)) {
      airlines.push(airline)
    }
  })

  return airlines
}