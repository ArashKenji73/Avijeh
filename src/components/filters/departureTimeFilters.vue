<template>
  <div class="flex flex-col p-4" :class="open ? 'gap-4' : 'gap-0'">
    <h2 class="font-bold" @click="open = !open">زمان حرکت پرواز</h2>

    <div
      class="flex flex-col gap-4 overflow-y-hidden"
      :class="{ 'h-0': !open }"
    >
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
  </div>
</template>

<script setup lang="ts">
import { getMatchedDepartureTimeFilters } from "@/utils/departureTime";
import { ref, watch } from "vue";

interface Flight {
  departureDateTime: string;
}

const props = defineProps<{
  flights: Flight[];
}>();
const open = ref<boolean>(true);
const matchedFilters = getMatchedDepartureTimeFilters(props.flights);

const selectedTime = ref<string[]>([]);

const emit = defineEmits<{
  timeRange: [value: string[]];
}>();
watch(selectedTime, (value) => {
  emit("timeRange", value);
});
</script>
