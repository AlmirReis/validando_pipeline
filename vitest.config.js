import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,          // habilita 'describe', 'it', 'expect' globais
    environment: 'jsdom',   // se seu código usa DOM, ou 'node' para backend
  },
});
