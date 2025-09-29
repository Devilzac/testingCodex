<template>
  <button
    :class="['base-button', `base-button--${appearance}`]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    appearance?: 'primary' | 'secondary' | 'ghost';
  }>(),
  {
    appearance: 'secondary'
  }
);

defineEmits<{
  (e: 'click', value: MouseEvent): void;
}>();
</script>

<style scoped>
.base-button {
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.base-button:hover {
  transform: translateY(-1px);
}

.base-button:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.4);
  outline-offset: 2px;
}

.base-button--primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  box-shadow: 0 10px 18px rgba(99, 102, 241, 0.3);
}

.base-button--secondary {
  background: #e2e8f0;
  color: #1f2933;
}

.base-button--ghost {
  background: transparent;
  color: #6366f1;
}
</style>
