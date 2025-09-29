import { fileURLToPath, URL } from 'node:url';

import { mergeConfig, type PluginOption } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-onboarding'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal: async (config) => {
    const disabledPlugins = new Set(['vite-plugin-vue-devtools', 'vite-plugin-inspect']);
    const isNamedPlugin = (plugin: PluginOption): plugin is { name: string } =>
      typeof plugin === 'object' &&
      plugin !== null &&
      !Array.isArray(plugin) &&
      'name' in plugin &&
      typeof (plugin as { name?: unknown }).name === 'string';

    config.plugins = (config.plugins ?? []).filter((plugin) => {
      if (!isNamedPlugin(plugin)) {
        return true;
      }

      return !disabledPlugins.has(plugin.name);
    });

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url)),
          '@/composables/useAuth': fileURLToPath(
            new URL('../src/stories/mocks/useAuth.ts', import.meta.url)
          )
        }
      }
    });
  }
};

export default config;
