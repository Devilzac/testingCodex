import type { Meta, StoryObj } from '@storybook/vue3-vite';

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

export const Documentation: Story = {
  render: () => ({
    components: { IconDocumentation },
    template: '<IconDocumentation />'
  })
};

export const Tooling: Story = {
  render: () => ({
    components: { IconTooling },
    template: '<IconTooling />'
  })
};

export const Ecosystem: Story = {
  render: () => ({
    components: { IconEcosystem },
    template: '<IconEcosystem />'
  })
};

export const Community: Story = {
  render: () => ({
    components: { IconCommunity },
    template: '<IconCommunity />'
  })
};

export const Support: Story = {
  render: () => ({
    components: { IconSupport },
    template: '<IconSupport />'
  })
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
  })
};
