<template>
  <section class="users">
    <header class="users__header">
      <h1>Team directory</h1>
      <BaseButton appearance="primary" @click="refresh">Refresh</BaseButton>
    </header>
    <UserList :users="users" :loading="loading" />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import BaseButton from '@/components/base/BaseButton.vue';
import UserList from '@/components/features/users/UserList.vue';
import { useUsers } from '@/api/hooks/useUsers';

const { users, loading, fetchUsers } = useUsers();

const refresh = () => {
  fetchUsers();
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.users {
  display: grid;
  gap: 1.5rem;
}

.users__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 2rem;
  color: #1f2933;
}
</style>
