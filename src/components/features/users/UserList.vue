<template>
  <div class="user-list">
    <p v-if="loading" class="user-list__empty">Loading users…</p>
    <p v-else-if="!users.length" class="user-list__empty">No users found.</p>
    <div v-else class="user-list__grid">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/user';

import UserCard from './UserCard.vue';

defineProps<{
  users: User[];
  loading: boolean;
}>();
</script>

<style scoped>
.user-list {
  display: grid;
}

.user-list__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}

.user-list__empty {
  margin: 0;
  color: #64748b;
}
</style>
