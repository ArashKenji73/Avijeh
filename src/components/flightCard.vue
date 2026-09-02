<template>
  <div
    class="relative flex overflow-hidden rounded-xl border border-gray-200 bg-white text-sm shadow-sm"
  >
    <div class="flex grow flex-col p-5">
      <!-- <div class="flex">
        <div class="w-52 shrink-0"></div>
        <div class="grow">
          <div class="flex gap-2">
            <span class="rounded-lg border px-3 py-1"> Airbus A310 </span>

            <span class="rounded-lg border px-3 py-1"> 5KG 🧳 </span>

            <span class="rounded-lg border px-3 py-1"> 20KG 🧳 </span>

            <span class="rounded-lg border px-3 py-1 text-red-500">
              غیرقابل استرداد
            </span>
          </div>
        </div>
      </div> -->

      <div class="flex grow items-start">
        <div class="w-52 shrink-0">
          <div class="flex items-center gap-3">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-lg border"
            >
              ✈️
            </div>

            <div>
              <p class="font-bold">
                {{ props.data.flights[0]?.flightsSegments[0]!.airlineTitle }}
              </p>
              <p class="text-gray-400">
                {{ props.data.flights[0]?.flightsSegments[0]!.flightNumber }}
              </p>
            </div>
          </div>
        </div>
        <div class="grow">
          <!-- timeline -->
          <div class="flex items-center justify-between gap-10">
            <!-- departure -->
            <div class="text-center">
              <p class="text-2xl font-bold">
                {{ formatTime(props.data.flights[0]?.departureDateTime!) }}
              </p>
              <p class="mt-2 text-gray-500">
                {{
                  props.data.flights[0]?.departureAirportLocationPersianTitle!
                }}
              </p>
            </div>

            <!-- line -->
            <div class="relative my-3 h-0.5 w-1/2 border-t border-gray-300">
              <div class="-mt-2 flex flex-col items-center">
                <div
                  class="flex gap-2"
                  v-if="props.data.flights[0]?.flightsSegmentStops.length! > 0"
                >
                  <div
                    class="h-2 w-2 bg-gray-600"
                    v-for="value in props.data.flights[0]?.flightsSegmentStops
                      .length"
                  ></div>
                </div>
                <div class="bg-white px-2 text-xs text-gray-400">
                  {{
                    formatTimeToPersian(
                      props.data.flights[0]?.flightsSegments[0]!
                        .durationTime as string,
                    )
                  }}
                </div>
              </div>
            </div>

            <!-- arrival -->
            <div class="text-center">
              <p class="text-2xl font-bold">
                {{ formatTime(props.data.flights[0]?.arrivalDateTime!) }}
              </p>

              <p class="mt-2 text-gray-500">
                {{ props.data.flights[0]?.arrivalAirportLocationPersianTitle! }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>{{ props.data.providerTypeTitle }}</div>
    </div>

    <!-- Price -->
    <div
      class="flex w-56 shrink-0 flex-col justify-center gap-3 border-r border-gray-200 p-5 text-center"
    >
      <p class="text-2xl font-bold">
        {{ data.totalPrice.parsedValue.toLocaleString("fa-IR") }}
        <span class="text-sm font-normal"> تومان </span>
      </p>

      <div class="space-y-1 text-xs">
        <div class="rounded bg-red-600 py-1 text-white">
          تخفیف: ۱,۲۰۰,۰۰۰ تومان
        </div>

        <div class="rounded bg-green-100 py-1 text-green-700">
          کمیسیون: ۹۵۳,۰۰۰ تومان
        </div>
      </div>

      <button
        class="rounded-lg bg-slate-800 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        انتخاب بلیط
      </button>

      <p class="text-xs text-gray-400">مجموع ۳ مسافر ۷,۶۵۰,۰۰۰ تومان</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FlightItem } from "@/types/Flight";
import { formatTime, formatTimeToPersian } from "@/utils/departureTimeFilters";
const props = defineProps<{
  data: FlightItem;
}>();
</script>
