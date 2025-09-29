import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

import AppSidebar from './AppSidebar.vue';

const meta = {
  title: 'Components/Layout/AppSidebar',
  component: AppSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: () => ({
    components: { AppSidebar },
    template: '<div style="padding:1.5rem;background:#e2e8f0"><AppSidebar /></div>'
  })
} satisfies Meta<typeof AppSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = await canvas.findAllByRole('link');

    await expect(links).toHaveLength(2);
    await expect(canvas.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Users' })).toBeVisible();
  }
};
