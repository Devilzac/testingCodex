import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { __setAuthToken } from '@/stories/mocks/useAuth';

import AppHeader from './AppHeader.vue';

const meta = {
  title: 'Components/Layout/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: { AppHeader },
    template: '<div style="background:#f8fafc;padding:1.5rem"><AppHeader /></div>'
  })
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  loaders: [async () => {
    __setAuthToken(null);
    return {};
  }]
};

export const LoggedIn: Story = {
  loaders: [async () => {
    __setAuthToken('storybook-token');
    return {};
  }]
};
