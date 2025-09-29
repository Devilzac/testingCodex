import type { Meta, StoryObj } from '@storybook/vue3-vite';

import HelloWorld from './HelloWorld.vue';

const meta = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  args: {
    msg: 'Hello Storybook'
  }
} satisfies Meta<typeof HelloWorld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    msg: 'Testing Codex Rocks!'
  }
};
