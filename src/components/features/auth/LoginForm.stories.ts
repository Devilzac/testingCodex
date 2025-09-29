import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, fn, userEvent, within } from '@storybook/test';

import { __mockAuthHandlers, __resetAuthMocks } from '@/stories/mocks/useAuth';

import LoginForm from './LoginForm.vue';

const meta = {
  title: 'Components/Features/Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: () => ({
    components: { LoginForm },
    template: '<div style="width:320px;max-width:100%"><LoginForm /></div>'
  })
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const loginSpy = fn();
    __mockAuthHandlers({ login: loginSpy });

    try {
      const canvas = within(canvasElement);
      const emailInput = await canvas.findByLabelText('Email');
      const passwordInput = await canvas.findByLabelText('Password');

      await userEvent.clear(emailInput);
      await userEvent.type(emailInput, 'user@example.com');
      await userEvent.clear(passwordInput);
      await userEvent.type(passwordInput, 'password123');
      await userEvent.click(canvas.getByRole('button', { name: 'Sign in' }));

      await expect(loginSpy).toHaveBeenCalledWith('user@example.com', 'password123');
    } finally {
      __resetAuthMocks();
    }
  }
};

export const Submitting: Story = {
  loaders: [async () => {
    __mockAuthHandlers({
      login: () => new Promise(() => {
        // Intentionally never resolve to showcase the loading state
      })
    });
    return {};
  }],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Email'), 'user@example.com');
    await userEvent.type(canvas.getByLabelText('Password'), 'password123');
    await userEvent.click(canvas.getByRole('button', { name: 'Sign in' }));
  }
};
