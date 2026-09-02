<template>
  <div
    class="relative flex overflow-hidden rounded-xl border border-gray-200 bg-white text-sm shadow-sm"
  >
    <!-- Main content -->
    <div class="flex grow flex-col p-5">
      <div class="flex grow items-start">
        <!-- Airline -->
        <div class="w-52 shrink-0">
          <div class="flex items-center gap-3">
            <div
              class="h-14 w-14 shrink-0 animate-pulse rounded-lg bg-gray-200"
            ></div>

            <div class="space-y-2">
              <div class="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
              <div class="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="grow">
          <div class="flex items-center justify-between gap-10">
            <!-- Departure -->
            <div class="flex flex-col items-center">
              <div class="h-7 w-16 animate-pulse rounded bg-gray-200"></div>

              <div
                class="mt-3 h-4 w-24 animate-pulse rounded bg-gray-200"
              ></div>
            </div>

            <!-- Line -->
            <div class="relative my-3 h-0.5 grow bg-gray-200">
              <div
                class="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gray-300"
              ></div>

              <div
                class="absolute top-1/2 left-1/2 mt-4 h-3 w-20 -translate-x-1/2 animate-pulse rounded bg-gray-200"
              ></div>
            </div>

            <!-- Arrival -->
            <div class="flex flex-col items-center">
              <div class="h-7 w-16 animate-pulse rounded bg-gray-200"></div>

              <div
                class="mt-3 h-4 w-24 animate-pulse rounded bg-gray-200"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Provider -->
      <div class="mt-5">
        <div class="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>

    <!-- Price -->
    <div
      class="flex w-56 shrink-0 flex-col justify-center gap-3 border-r border-gray-200 p-5 text-center"
    >
      <!-- Price -->
      <div class="mx-auto h-7 w-32 animate-pulse rounded bg-gray-200"></div>

      <!-- Discount -->
      <div class="h-6 w-full animate-pulse rounded bg-gray-200"></div>

      <!-- Commission -->
      <div class="h-6 w-full animate-pulse rounded bg-gray-200"></div>

      <!-- Button -->
      <div class="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>

      <!-- Total -->
      <div class="mx-auto h-3 w-40 animate-pulse rounded bg-gray-200"></div>
    </div>
  </div>
</template>
