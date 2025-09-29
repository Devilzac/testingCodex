<template>
  <article class="user-card">
    <header class="user-card__header">
      <div class="user-card__avatar" aria-hidden="true">{{ initials }}</div>
      <div>
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    </header>
    <dl class="user-card__meta">
      <div>
        <dt>Role</dt>
        <dd>{{ user.role }}</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>{{ user.active ? 'Active' : 'Inactive' }}</dd>
      </div>
    </dl>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { User } from '@/types/user';

const props = defineProps<{
  user: User;
}>();

const initials = computed(() =>
  props.user.name
    .split(' ')
    .map((part) => part[0]?.toUpperCase())
    .join('')
);
</script>

<style scoped>
.user-card {
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  display: grid;
  gap: 1rem;
}

.user-card__header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.user-card__avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 700;
}

h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #1f2933;
}

p {
  margin: 0;
  color: #52606d;
}

.user-card__meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

dl {
  margin: 0;
}

dt {
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

dd {
  margin: 0;
  color: #1f2933;
  font-weight: 600;
}
</style>
