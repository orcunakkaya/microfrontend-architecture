<template>
  <div
    style="
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      max-width: 320px;
    "
  >
    <h3 style="margin-top: 0">{{ title }}</h3>
    <p style="margin-bottom: 0">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
}>();
</script>