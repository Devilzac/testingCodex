import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseButton from './BaseButton.vue';

const meta = {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  args: {
    appearance: 'secondary',
    default: 'Click me'
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>'
  })
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    default: 'Secondary action'
  }
};

export const Primary: Story = {
  args: {
    appearance: 'primary',
    default: 'Primary action'
  }
};

export const Ghost: Story = {
  args: {
    appearance: 'ghost',
    default: 'Ghost action'
  }
};
