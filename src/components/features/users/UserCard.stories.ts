import type { Meta, StoryObj } from '@storybook/vue3-vite';

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

export const Active: Story = {};

export const Inactive: Story = {
  args: {
    user: {
      ...exampleUser,
      id: '2',
      name: 'Grace Hopper',
      email: 'grace@example.com',
      active: false
    }
  }
};
