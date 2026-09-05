export interface FlightResult {
  httpStatusCode: number;
  statusCode: number;
  messages: unknown[];
  result: FlightSearchResult;
}

export interface FlightSearchResult {
  itineraries: Itinerary[];
}

export interface Itinerary {
  id: string;
  direction: boolean;

  discount: PriceValue;
  discountPercent: PriceValue;

  totalPrice: PriceValue;
  totalPriceIncludeCommission: PriceValue;
  commission: PriceValue;
  companyGroupCommission: PriceValue;
  totalTax: PriceValue;
  listPrice: PriceValue;
  price: PriceValue;

  currency: string;
  currencyTitle: string;

  isRequiredCaptchaCode: boolean;

  ticketType: number;
  providerType: number;
  providerId: number;

  isFeatured: boolean;
  tags: unknown[];

  providerTypeTitle: string;

  exclusiveReservationCompanyTitle: string | null;
  exclusiveReservationUserFullName: string | null;

  remarks: string;

  brandedFare: boolean;
  flightAncillary: boolean;

  flightRemarks: FlightRemark[];
  tourismServices: unknown[];

  flights: Flight[];

  priceDetails: PriceDetail[];

  flightRuleTrackerItems: FlightRuleTrackerItem[];

  isFlightSaleable: boolean;

  fareClassCapacityStatus: number;
  fareClassCapacityStatusTitle: string;

  isOpen: boolean;

  startOpenDepartureDate: string | null;
  endOpenDepartureDate: string | null;

  excludedNationalities: unknown[];
}

export interface PriceValue {
  source: string;
  parsedValue: number;
}

export interface Flight {
  direction: boolean;

  departureAirportLocationCode: string;
  departureAirportLocationTitle: string;
  departureAirportLocationPersianTitle: string;

  departureCityTitle: string;
  departureCityPersianTitle: string;

  departureDateTime: string;

  arrivalAirportLocationCode: string;
  arrivalAirportLocationTitle: string;
  arrivalAirportLocationPersianTitle: string;

  arrivalCityTitle: string;
  arrivalCityPersianTitle: string;

  arrivalDateTime: string;

  elapsedTime: number;
  stops: number;
  remain: number;

  cabinType: string;
  cabinCode: string;

  flightsSegments: FlightSegment[];
  flightsSegmentStops: unknown[];
}

export interface FlightSegment {
  departureAirportLocationCode: string;
  departureAirportLocationTitle: string;
  departureAirportLocationPersianTitle: string;

  departureCityTitle: string;
  departureCityPersianTitle: string;

  departureAirportLocationTerminal: string | null;

  departureDateTime: string;

  arrivalAirportLocationCode: string;
  arrivalAirportLocationTerminal: string | null;

  arrivalAirportLocationTitle: string;
  arrivalAirportLocationPersianTitle: string;

  arrivalCityTitle: string;
  arrivalCityPersianTitle: string;

  arrivalDateTime: string;

  duration: number;
  durationTime: string;

  flightNumber: string;
  fareClass: string;

  cabinCode: string;
  cabinType: string;

  airplaneType: string | null;
  airplaneTitle: string | null;

  operatingAirlineCode: string;
  operatingAirlineTitle: string;

  marketingAirlineCode: string;
  marketingAirlineTitle: string;

  airlineCode: string;
  airlineTitle: string;

  baggages: string | null;

  vehicleType: number;

  baggageAllowance: BaggageAllowance | null;

  hasTechnicalStop: boolean;
  technicalStops: unknown[];
}

export interface BaggageAllowance {
  adult: string | null;
  child: string | null;
  infant: string | null;
  description: string | null;
}

export interface PriceDetail {
  passengerType: number;

  discount: PriceValue;

  totalPrice: PriceValue;
  commission: PriceValue;
  companyGroupCommission: PriceValue;

  totalPriceIncludeCommission: PriceValue;
  listPrice: PriceValue;
  totalTax: PriceValue;

  roundedTotalPrice: PriceValue;

  currecny: string;
  currecnyTitle: string;
}

export interface FlightRemark {
  key: number;
  value: string;
}

export interface FlightRuleTrackerItem {
  id: number;
  title: string;
  type: number;
  typeTitle: string;
  isDeleted: boolean;
}


export enum FlightSortType {
  BEST_SUGGESTION = "best_suggestion",
  CHEAPEST = "cheapest",
  MOST_EXPENSIVE = "most_expensive",
  FASTEST = "fastest",
  CLOSEST = "closest",
}