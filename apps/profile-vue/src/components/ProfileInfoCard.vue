<template>
  <div
    style="
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 18px;
      min-width: 220px;
      background: #ffffff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    "
  >
    <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 16px">
      {{ title }}
    </h3>
    <p style="margin-bottom: 0; font-size: 16px; color: #374151">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
}>();
</script>