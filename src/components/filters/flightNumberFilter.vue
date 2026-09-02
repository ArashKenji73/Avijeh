<template>
  <input
    type="text"
    placeholder="جستجوی شماره پرواز"
    class="rounded-xl border border-gray-200 px-4 py-2"
    v-model="flightNumber"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const flightNumber = ref<string>("");

const emit = defineEmits<{
  flightNumber: [value: string];
}>();

watch(flightNumber, (value) => {
  emit("flightNumber", value);
});
</script>

<style scoped></style>
