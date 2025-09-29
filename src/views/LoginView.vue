<template>
  <section class="login">
    <h1>Sign in</h1>
    <LoginForm />
  </section>
</template>

<script setup lang="ts">
import LoginForm from '@/components/features/auth/LoginForm.vue';
</script>

<style scoped>
.login {
  display: grid;
  gap: 1.5rem;
  max-width: 28rem;
  margin: 2rem auto;
}

h1 {
  margin: 0;
  font-size: 2rem;
  color: #1f2933;
  text-align: center;
}
</style>
