import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';
//import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  //output: 'server',
  //adapter: node({
  //  mode: 'standalone',
  //}),
  integrations: [tailwind(), compress()],
  vite: {
    plugins: [visualizer()],
  },
});
