import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from '@storybook/test';

import IconCommunity from './IconCommunity.vue';
import IconDocumentation from './IconDocumentation.vue';
import IconEcosystem from './IconEcosystem.vue';
import IconSupport from './IconSupport.vue';
import IconTooling from './IconTooling.vue';

const meta = {
  title: 'Components/Icons',
  component: IconDocumentation,
  tags: ['autodocs']
} satisfies Meta<typeof IconDocumentation>;

export default meta;

type Story = StoryObj<typeof meta>;

const expectIconCount = async ({ canvasElement }: Parameters<NonNullable<Story['play']>>[0], count: number) => {
  const canvas = within(canvasElement);
  const icons = canvas.container.querySelectorAll('svg');

  await expect(icons).toHaveLength(count);
};

export const Documentation: Story = {
  render: () => ({
    components: { IconDocumentation },
    template: '<IconDocumentation />'
  }),
  play: (context) => expectIconCount(context, 1)
};

export const Tooling: Story = {
  render: () => ({
    components: { IconTooling },
    template: '<IconTooling />'
  }),
  play: (context) => expectIconCount(context, 1)
};

export const Ecosystem: Story = {
  render: () => ({
    components: { IconEcosystem },
    template: '<IconEcosystem />'
  }),
  play: (context) => expectIconCount(context, 1)
};

export const Community: Story = {
  render: () => ({
    components: { IconCommunity },
    template: '<IconCommunity />'
  }),
  play: (context) => expectIconCount(context, 1)
};

export const Support: Story = {
  render: () => ({
    components: { IconSupport },
    template: '<IconSupport />'
  }),
  play: (context) => expectIconCount(context, 1)
};

export const Gallery: Story = {
  render: () => ({
    components: {
      IconDocumentation,
      IconTooling,
      IconEcosystem,
      IconCommunity,
      IconSupport
    },
    template: `
      <div style="display:flex;gap:1rem;font-size:2rem;color:#4f46e5">
        <IconDocumentation />
        <IconTooling />
        <IconEcosystem />
        <IconCommunity />
        <IconSupport />
      </div>
    `
  }),
  play: (context) => expectIconCount(context, 5)
};
