export interface FlightItem {
  id: string
  direction: boolean
  discount: Discount
  discountPercent: DiscountPercent
  totalPrice: TotalPrice
  totalPriceIncludeCommission: TotalPriceIncludeCommission
  commission: Commission
  companyGroupCommission: CompanyGroupCommission
  totalTax: TotalTax
  listPrice: ListPrice
  price: Price
  currency: string
  currencyTitle: string
  isRequiredCaptchaCode: boolean
  ticketType: number
  providerType: number
  providerId: number
  isFeatured: boolean
  tags: any[]
  providerTypeTitle: string
  exclusiveReservationCompanyTitle: any
  exclusiveReservationUserFullName: any
  remarks: string
  brandedFare: boolean
  flightAncillary: boolean
  flightRemarks: any[]
  tourismServices: any[]
  flights: Flight[]
  priceDetails: PriceDetail[]
  flightRuleTrackerItems: FlightRuleTrackerItem[]
  isFlightSaleable: boolean
  fareClassCapacityStatus: number
  fareClassCapacityStatusTitle: string
  isOpen: boolean
  startOpenDepartureDate: any
  endOpenDepartureDate: any
  excludedNationalities: any[]
}

export interface Discount {
  source: string
  parsedValue: number
}

export interface DiscountPercent {
  source: string
  parsedValue: number
}

export interface TotalPrice {
  source: string
  parsedValue: number
}

export interface TotalPriceIncludeCommission {
  source: string
  parsedValue: number
}

export interface Commission {
  source: string
  parsedValue: number
}

export interface CompanyGroupCommission {
  source: string
  parsedValue: number
}

export interface TotalTax {
  source: string
  parsedValue: number
}

export interface ListPrice {
  source: string
  parsedValue: number
}

export interface Price {
  source: string
  parsedValue: number
}

export interface Flight {
  direction: boolean
  departureAirportLocationCode: string
  cabinType: string
  cabinCode: string
  departureAirportLocationTitle: string
  departureAirportLocationPersianTitle: string
  departureCityTitle: string
  departureCityPersianTitle: string
  departureDateTime: string
  arrivalAirportLocationCode: string
  arrivalAirportLocationTitle: string
  arrivalAirportLocationPersianTitle: string
  arrivalCityTitle: string
  arrivalCityPersianTitle: string
  arrivalDateTime: string
  elapsedTime: number
  stops: number
  remain: number
  flightsSegments: FlightsSegment[]
  flightsSegmentStops: any[]
}

export interface FlightsSegment {
  departureAirportLocationCode: string
  departureAirportLocationTitle: string
  departureAirportLocationPersianTitle: string
  departureCityTitle: string
  departureCityPersianTitle: string
  departureAirportLocationTerminal: any
  departureDateTime: string
  arrivalAirportLocationCode: string
  arrivalAirportLocationTerminal: any
  arrivalAirportLocationTitle: string
  arrivalAirportLocationPersianTitle: string
  arrivalCityTitle: string
  arrivalCityPersianTitle: string
  arrivalDateTime: string
  duration: number
  durationTime: string
  flightNumber: string
  fareClass: string
  cabinCode: string
  cabinType: string
  airplaneType: any
  airplaneTitle: string
  operatingAirlineCode: string
  operatingAirlineTitle: string
  marketingAirlineCode: string
  marketingAirlineTitle: string
  airlineCode: string
  airlineTitle: string
  baggages: string
  vehicleType: number
  baggageAllowance: BaggageAllowance
  hasTechnicalStop: boolean
  technicalStops: any[]
}

export interface BaggageAllowance {
  adult: string
  child: string
  infant: string
  description: any
}

export interface PriceDetail {
  passengerType: number
  discount: Discount2
  totalPrice: TotalPrice2
  commission: Commission2
  companyGroupCommission: CompanyGroupCommission2
  totalPriceIncludeCommission: TotalPriceIncludeCommission2
  listPrice: ListPrice2
  totalTax: TotalTax2
  roundedTotalPrice: RoundedTotalPrice
  currecny: string
  currecnyTitle: string
}

export interface Discount2 {
  source: string
  parsedValue: number
}

export interface TotalPrice2 {
  source: string
  parsedValue: number
}

export interface Commission2 {
  source: string
  parsedValue: number
}

export interface CompanyGroupCommission2 {
  source: string
  parsedValue: number
}

export interface TotalPriceIncludeCommission2 {
  source: string
  parsedValue: number
}

export interface ListPrice2 {
  source: string
  parsedValue: number
}

export interface TotalTax2 {
  source: string
  parsedValue: number
}

export interface RoundedTotalPrice {
  source: string
  parsedValue: number
}

export interface FlightRuleTrackerItem {
  id: number
  title: string
  type: number
  typeTitle: string
  isDeleted: boolean
}


export enum FlightSortType {
  BEST_SUGGESTION = "best_suggestion",
  CHEAPEST = "cheapest",
  MOST_EXPENSIVE = "most_expensive",
  FASTEST = "fastest",
  CLOSEST = "closest",
}