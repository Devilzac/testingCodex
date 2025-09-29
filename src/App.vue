<template>
  <div class="app">
    <AppHeader />
    <div class="app__body">
      <AppSidebar />
      <main class="app__content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppHeader from '@/components/layout/AppHeader.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__body {
  display: flex;
  flex: 1;
}

.app__content {
  flex: 1;
  padding: 1.5rem;
  background-color: #ffffff;
  border-top-left-radius: 1rem;
}
</style>
