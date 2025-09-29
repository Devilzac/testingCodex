import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

import WelcomeItem from './WelcomeItem.vue';
import IconDocumentation from './icons/IconDocumentation.vue';

const meta = {
  title: 'Components/WelcomeItem',
  component: WelcomeItem,
  tags: ['autodocs'],
  render: () => ({
    components: { WelcomeItem, IconDocumentation },
    template: `
      <div style="max-width:640px">
        <WelcomeItem>
          <template #icon>
            <IconDocumentation />
          </template>
          <template #heading>Documentation</template>
          Build immersive stories for every component in your application.
        </WelcomeItem>
      </div>
    `
  })
} satisfies Meta<typeof WelcomeItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { level: 3, name: 'Documentation' });

    await expect(heading).toBeInTheDocument();
    await expect(canvas.getByText('Build immersive stories for every component in your application.')).toBeVisible();
  }
};
