<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <BaseInput
      id="email"
      v-model="form.email"
      label="Email"
      type="email"
      placeholder="you@example.com"
      autocomplete="email"
      required
    />
    <BaseInput
      id="password"
      v-model="form.password"
      label="Password"
      type="password"
      autocomplete="current-password"
      required
    />
    <BaseButton appearance="primary" type="submit" :disabled="submitting">
      {{ submitting ? 'Signing in…' : 'Sign in' }}
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { useAuth } from '@/composables/useAuth';

const { login } = useAuth();

const form = reactive({
  email: '',
  password: ''
});

const submitting = ref(false);

const handleSubmit = async () => {
  if (submitting.value) {
    return;
  }

  submitting.value = true;
  try {
    await login(form.email, form.password);
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.login-form {
  display: grid;
  gap: 1rem;
}
</style>
