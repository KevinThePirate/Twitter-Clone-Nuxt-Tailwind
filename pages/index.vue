<template>
  <div>
    <MainSection title="Home" :loading="loading">
      This is our homepage
    </MainSection>
  </div>
</template>
<script setup>
const loading = ref(false);
</script>
