import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, userEvent, within } from '@storybook/test';
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

const interactWithInput: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const input = await canvas.findByLabelText(args.label);

  await expect(input).toHaveAttribute('type', args.type);

  if (args.placeholder) {
    await expect(input).toHaveAttribute('placeholder', args.placeholder);
  }

  const newValue = args.type === 'password' ? 's3cureP@ss' : 'storybook@example.com';

  await userEvent.clear(input);
  await userEvent.type(input, newValue);

  await expect(input).toHaveValue(newValue);
};

export const Email: Story = {
  play: interactWithInput
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••'
  },
  play: interactWithInput
};

export const Filled: Story = {
  args: {
    label: 'Full name',
    type: 'text',
    modelValue: 'Ada Lovelace'
  },
  play: interactWithInput
};
