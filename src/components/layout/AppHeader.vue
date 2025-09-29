<template>
  <header class="app-header">
    <h1 class="app-header__title">Testing Codex</h1>
    <nav class="app-header__actions">
      <BaseButton appearance="ghost" @click="handleLogout">Logout</BaseButton>
    </nav>
  </header>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { useAuth } from '@/composables/useAuth';

const { logout } = useAuth();

const handleLogout = () => {
  logout();
};
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.app-header__title {
  margin: 0;
  font-size: 1.5rem;
  color: #1f2933;
}
</style>
