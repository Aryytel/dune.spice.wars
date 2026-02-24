import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dune-spice-wars.github.io',
  base: '/duneopedia/',
  output: 'static',
  build: {
    format: 'file',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
