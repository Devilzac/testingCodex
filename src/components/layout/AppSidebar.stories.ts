import type { Meta, StoryObj } from '@storybook/vue3-vite';

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

export const Default: Story = {};
