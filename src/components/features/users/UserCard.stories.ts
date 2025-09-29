import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

import type { User } from '@/types/user';

import UserCard from './UserCard.vue';

const exampleUser: User = {
  id: '1',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  role: 'Administrator',
  active: true
};

const meta = {
  title: 'Components/Features/Users/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  args: {
    user: exampleUser
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const verifyUserCard: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const { name, email, role, active } = args.user;

  const heading = await canvas.findByRole('heading', { level: 3, name });
  await expect(heading).toBeVisible();
  await expect(canvas.getByText(email)).toBeVisible();
  await expect(canvas.getByText(role)).toBeVisible();
  await expect(canvas.getByText(active ? 'Active' : 'Inactive')).toBeVisible();

  const initials = name
    .split(' ')
    .map((part) => part[0]?.toUpperCase())
    .join('');

  await expect(canvas.getByText(initials)).toBeInTheDocument();
};

export const Active: Story = {
  play: verifyUserCard
};

export const Inactive: Story = {
  args: {
    user: {
      ...exampleUser,
      id: '2',
      name: 'Grace Hopper',
      email: 'grace@example.com',
      active: false
    }
  },
  play: verifyUserCard
};
