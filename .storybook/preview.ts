import type { Preview } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

import { __resetAuthMocks } from '@/stories/mocks/useAuth';

const RouterLinkStub = defineComponent({
  name: 'RouterLinkStub',
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  setup(props, { slots }) {
    return () =>
      h(
        'a',
        {
          href: typeof props.to === 'string' ? props.to : '#',
          'data-router-link': typeof props.to === 'string' ? props.to : JSON.stringify(props.to)
        },
        slots.default?.()
      );
  }
});

setup((app) => {
  app.component('RouterLink', RouterLinkStub);
});

const preview: Preview = {
  decorators: [
    (story, context) => {
      __resetAuthMocks();
      return story(context);
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
