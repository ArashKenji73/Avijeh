```vue
<template>
  <div
    class="flex items-center justify-between rounded-xl bg-white px-4 shadow"
  >
    <div class="sort-item">مرتب شده بر اساس:</div>

    <div
      @click="selectSort(FlightSortType.BEST_SUGGESTION)"
      class="sort-item"
      :class="{ active: sortBy === FlightSortType.BEST_SUGGESTION }"
    >
      بهترین پیشنهاد
    </div>

    <div
      @click="selectSort(FlightSortType.CHEAPEST)"
      class="sort-item"
      :class="{ active: sortBy === FlightSortType.CHEAPEST }"
    >
      ارزان‌ترین
    </div>

    <div
      @click="selectSort(FlightSortType.MOST_EXPENSIVE)"
      class="sort-item"
      :class="{ active: sortBy === FlightSortType.MOST_EXPENSIVE }"
    >
      گران‌ترین
    </div>

    <div
      @click="selectSort(FlightSortType.FASTEST)"
      class="sort-item"
      :class="{ active: sortBy === FlightSortType.FASTEST }"
    >
      سریع‌ترین
    </div>

    <div
      @click="selectSort(FlightSortType.CLOSEST)"
      class="sort-item"
      :class="{ active: sortBy === FlightSortType.CLOSEST }"
    >
      نزدیک‌ترین زمان
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FlightSortType } from "@/types/Flight";

const sortBy = ref<FlightSortType>(FlightSortType.BEST_SUGGESTION);

const emit = defineEmits<{
  sort: [value: FlightSortType];
}>();

const selectSort = (value: FlightSortType) => {
  sortBy.value = value;
  emit("sort", value);
};
</script>

<style scoped>
@reference "@/assets/style.css";

.sort-item {
  @apply cursor-pointer p-2;
}

.sort-item.active {
  @apply border-b-2 border-red-500;
}
</style>
```
