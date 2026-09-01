<template>
  <div class="flex flex-col gap-2 p-4">
    <h2 class="font-bold">زمان حرکت پرواز</h2>

    <div v-for="item in matchedFilters" :key="item.id" class="flex gap-2">
      <input
        type="checkbox"
        :id="item.id"
        :value="item.id"
        v-model="selectedTime"
      />

      <label :for="item.id">
        {{ item.title }} ({{ item.from }} تا {{ item.to }})
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getMatchedDepartureTimeFilters } from "@/utils/departureTimeFilters";
import { ref, watch } from "vue";

interface Flight {
  departureDateTime: string;
}

const props = defineProps<{
  flights: Flight[];
}>();

const emit = defineEmits<{
  timeRange: [value: string[]];
}>();

const matchedFilters = getMatchedDepartureTimeFilters(props.flights);

const selectedTime = ref<string[]>([]);

watch(selectedTime, (value) => {
  emit("timeRange", value);
});
</script>
