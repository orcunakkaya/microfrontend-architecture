<template>
  <div>
    <p style="color: #6b7280; line-height: 1.6">
      Bu ekran Vue remote uygulamasından mount edilmektedir.
    </p>

    <div style="display: flex; gap: 16px; margin-top: 24px; flex-wrap: wrap; justify-content: center; align-items: center;">
      <ProfileInfoCard title="Ad Soyad" value="Orçun Akkaya" />
      <ProfileInfoCard title="Rol" value="Frontend Developer" />
      <ProfileInfoCard title="Şehir" value="Istanbul" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileInfoCard from '../components/ProfileInfoCard.vue';
</script>