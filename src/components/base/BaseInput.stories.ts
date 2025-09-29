import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, watch } from 'vue';

import BaseInput from './BaseInput.vue';

const meta = {
  title: 'Components/Base/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    modelValue: '',
    type: 'email',
    placeholder: 'you@example.com'
  },
  render: (args) => ({
    components: { BaseInput },
    setup() {
      const value = ref(args.modelValue ?? '');

      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue ?? '';
        }
      );

      return { args, value };
    },
    template: '<BaseInput v-bind="args" v-model="value" />'
  })
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••'
  }
};

export const Filled: Story = {
  args: {
    label: 'Full name',
    type: 'text',
    modelValue: 'Ada Lovelace'
  }
};
