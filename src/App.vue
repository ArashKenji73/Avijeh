<template>
  <div class="container mx-auto flex min-h-screen gap-8">
    <aside
      class="sticky top-0 max-h-screen w-1/4 shrink-0 border border-gray-200 bg-white text-sm shadow-sm"
    >
      <departureTimeFilters
        :flights="flightsDepartureDateTime"
        @timeRange="handleTimeFilter"
      />

      <airlinesFilters
        :flights="result.result.itineraries"
        @airline="handleAirlineFilter"
      />

      <!-- {{ filter }} -->
    </aside>
    <main class="flex grow flex-col gap-4">
      <sortBy @sort="handleSort" />
      <div class="flex items-center gap-2">
        <span class="font-semibold">{{ filteredData.length }}</span>
        <span>پرواز یافت شد</span>
      </div>

      <div
        v-for="item in filteredData.slice(
          0,
          paginagtion.page * paginagtion.perPage,
        )"
        :key="item.id"
      >
        <FlightCard :data="item" />
      </div>

      <button
        class="mx-auto w-60 cursor-pointer border border-gray-200 bg-white px-4 py-2 text-sm font-bold shadow-sm"
        v-if="filteredData.length >= paginagtion.page * paginagtion.perPage"
        @click="loadMore"
      >
        مشاهده نتایج بیشتر
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { FlightItem } from "@/types/Flight";
import { isDepartureTimeInRange } from "@/utils/departureTime";
import { findAirlinesInFlight } from "@/utils/airlines";
import { FlightSortType } from "@/types/Flight";
import { result } from "@/response";
import departureTimeFilters from "@/components/filters/departureTimeFilters.vue";
import airlinesFilters from "@/components/filters/airlinesFilters.vue";
import FlightCard from "@/components/flightCard.vue";
import sortBy from "@/components/sortBy.vue";
import { computed, ref } from "vue";

const flightsDepartureDateTime = result.result.itineraries.flatMap((item) =>
  item.flights.map((flight) => ({
    departureDateTime: flight.departureDateTime,
  })),
);

const handleTimeFilter = (timeRange: string[]) => {
  paginagtion.value.page = 1;
  scrollOnTop();
  filter.value.timeRange = timeRange;
};

const handleAirlineFilter = (airlines: string[]) => {
  paginagtion.value.page = 1;
  scrollOnTop();
  filter.value.airlines = airlines;
};

const filter = ref<{
  timeRange: string[];
  sortBy: FlightSortType;
  airlines: string[];
}>({
  timeRange: [],
  sortBy: FlightSortType.BEST_SUGGESTION,
  airlines: [],
});

const paginagtion = ref<{
  page: number;
  perPage: number;
}>({
  page: 1,
  perPage: 10,
});

const loadMore = () => {
  paginagtion.value.page++;
};
const handleSort = (sort: FlightSortType) => {
  filter.value.sortBy = sort;
};

const scrollOnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const filteredData = computed(() => {
  let flights: FlightItem[] = [...result.result.itineraries];

  flights = flights.filter((item) =>
    isDepartureTimeInRange(
      item.flights[0]!.departureDateTime,
      filter.value.timeRange,
    ),
  );

  flights = findAirlinesInFlight(filter.value.airlines, flights);

  switch (filter.value.sortBy) {
    case FlightSortType.CHEAPEST:
      return flights.sort(
        (a, b) => a.totalPrice.parsedValue - b.totalPrice.parsedValue,
      );

    case FlightSortType.MOST_EXPENSIVE:
      return flights.sort(
        (a, b) => b.totalPrice.parsedValue - a.totalPrice.parsedValue,
      );
    case FlightSortType.FASTEST:
      return flights.sort(
        (a, b) =>
          a.flights[0]?.flightsSegments[0]?.duration! -
          b.flights[0]?.flightsSegments[0]?.duration!,
      );
    default:
      return flights;
  }
});
</script>

<style scoped></style>
