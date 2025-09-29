import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, userEvent, within } from '@storybook/test';

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

const playButtonStory: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button', { name: args.default });

  await expect(button).toBeInTheDocument();
  await expect(button).toBeEnabled();

  await userEvent.click(button);
};

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    default: 'Secondary action'
  },
  play: playButtonStory
};

export const Primary: Story = {
  args: {
    appearance: 'primary',
    default: 'Primary action'
  },
  play: playButtonStory
};

export const Ghost: Story = {
  args: {
    appearance: 'ghost',
    default: 'Ghost action'
  },
  play: playButtonStory
};
