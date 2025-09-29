<template>
  <aside class="app-sidebar">
    <router-link class="app-sidebar__link" to="/">Dashboard</router-link>
    <router-link class="app-sidebar__link" to="/users">Users</router-link>
  </aside>
</template>

<style scoped>
.app-sidebar {
  width: 14rem;
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
  background: #f1f5f9;
  border-right: 1px solid #e2e8f0;
}

.app-sidebar__link {
  color: #334155;
  font-weight: 600;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: background-color 0.2s ease;
}

.app-sidebar__link.router-link-active {
  background-color: rgba(99, 102, 241, 0.12);
  color: #4f46e5;
}
</style>
