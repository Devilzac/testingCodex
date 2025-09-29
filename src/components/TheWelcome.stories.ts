import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TheWelcome from './TheWelcome.vue';

const meta = {
  title: 'Components/TheWelcome',
  component: TheWelcome,
  tags: ['autodocs']
} satisfies Meta<typeof TheWelcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { TheWelcome },
    template: '<div style="max-width:960px;margin:0 auto"><TheWelcome /></div>'
  })
};
