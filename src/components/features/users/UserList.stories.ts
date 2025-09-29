import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

import type { User } from '@/types/user';

import UserList from './UserList.vue';

const users: User[] = [
  {
    id: '1',
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    role: 'Administrator',
    active: true
  },
  {
    id: '2',
    name: 'Grace Hopper',
    email: 'grace@example.com',
    role: 'Engineer',
    active: true
  },
  {
    id: '3',
    name: 'Alan Turing',
    email: 'alan@example.com',
    role: 'Researcher',
    active: false
  }
];

const meta = {
  title: 'Components/Features/Users/UserList',
  component: UserList,
  tags: ['autodocs'],
  args: {
    users,
    loading: false
  },
  parameters: {
    layout: 'padded'
  }
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;

const exerciseList: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  if (args.loading) {
    await expect(canvas.getByText('Loading users…')).toBeVisible();
    return;
  }

  if (!args.users.length) {
    await expect(canvas.getByText('No users found.')).toBeVisible();
    return;
  }

  for (const user of args.users) {
    await expect(canvas.getByText(user.name)).toBeVisible();
    await expect(canvas.getByText(user.email)).toBeVisible();
  }
};

export const Populated: Story = {
  play: exerciseList
};

export const Loading: Story = {
  args: {
    loading: true,
    users: []
  },
  play: exerciseList
};

export const Empty: Story = {
  args: {
    loading: false,
    users: []
  },
  play: exerciseList
};
