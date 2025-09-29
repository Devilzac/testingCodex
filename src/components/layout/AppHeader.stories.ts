import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, fn, userEvent, within } from '@storybook/test';

import { __mockAuthHandlers, __setAuthToken } from '@/stories/mocks/useAuth';

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

const assertHeaderVisible: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('heading', { level: 1, name: 'Testing Codex' })).toBeVisible();
};

export const LoggedOut: Story = {
  loaders: [async () => {
    __setAuthToken(null);
    return {};
  }],
  play: assertHeaderVisible
};

export const LoggedIn: Story = {
  loaders: [async () => {
    __setAuthToken('storybook-token');
    return {};
  }],
  play: async (context) => {
    await assertHeaderVisible(context);

    const logoutSpy = fn();
    __mockAuthHandlers({ logout: logoutSpy });

    const canvas = within(context.canvasElement);
    const logoutButton = await canvas.findByRole('button', { name: 'Logout' });

    await userEvent.click(logoutButton);
    await expect(logoutSpy).toHaveBeenCalledTimes(1);

    __mockAuthHandlers();
  }
};
