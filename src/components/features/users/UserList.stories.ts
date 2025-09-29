import type { Meta, StoryObj } from '@storybook/vue3-vite';

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

export const Populated: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
    users: []
  }
};

export const Empty: Story = {
  args: {
    loading: false,
    users: []
  }
};
