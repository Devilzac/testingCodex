<template>
  <label class="base-input">
    <span v-if="label" class="base-input__label">{{ label }}</span>
    <input
      v-bind="$attrs"
      :type="type"
      class="base-input__control"
      :value="modelValue"
      @input="onInput"
    />
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string | number;
    type?: string;
  }>(),
  {
    type: 'text',
    modelValue: ''
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.base-input {
  display: grid;
  gap: 0.5rem;
}

.base-input__label {
  font-size: 0.875rem;
  color: #52606d;
}

.base-input__control {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 1rem;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.base-input__control:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  outline: none;
}
</style>
