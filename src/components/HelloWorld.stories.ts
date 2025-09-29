import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

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

const verifyMessage: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const heading = await canvas.findByRole('heading', { level: 1 });

  await expect(heading).toHaveTextContent(args.msg);
};

export const Default: Story = {
  play: verifyMessage
};

export const CustomMessage: Story = {
  args: {
    msg: 'Testing Codex Rocks!'
  },
  play: verifyMessage
};
