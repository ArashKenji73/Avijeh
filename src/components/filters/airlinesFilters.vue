<template>
  <div class="flex flex-col gap-2 p-4">
    <h2 class="font-bold" @click="open = !open">ایرلاین</h2>

    <div class="overflow-hidden" :class="{ 'h-0': !open }">
      <div v-for="item in airlines" :key="item.code" class="flex gap-2">
        <input
          :id="item.code"
          v-model="selectedAirline"
          type="checkbox"
          :value="item.code"
        />

        <label :for="item.code">
          {{ item.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { FlightItem } from "@/types/Flight";
import { getAirlinesFromFlights } from "@/utils/airlines";

const props = defineProps<{
  flights: FlightItem[];
}>();

const airlines = getAirlinesFromFlights(props.flights);

const open = ref(true);

const selectedAirline = ref<string[]>([]);

const emit = defineEmits<{
  airline: [value: string[]];
}>();

watch(selectedAirline, (value) => {
  emit("airline", value);
});
</script>
