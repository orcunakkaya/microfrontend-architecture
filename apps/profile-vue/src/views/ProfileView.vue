<template>
  <div style="padding: 24px">
    <h1>Profile Remote</h1>
    <p>Bu ekran Vue remote içinden geliyor.</p>

    <div style="display: flex; gap: 16px; margin-top: 24px; flex-wrap: wrap alignItems: center; justifyContent: center;">
      <ProfileInfoCard title="Ad Soyad" value="Orçun Akkaya" />
      <ProfileInfoCard title="Rol" value="Frontend Developer" />
      <ProfileInfoCard title="Şehir" value="Istanbul" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileInfoCard from '../components/ProfileInfoCard.vue';
</script>