import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    root: 'web',
    build: { outDir: '../build/web', emptyOutDir: true },
    server: {
      host: 'localhost',
      port: 5173,
      strictPort: true,
      proxy: { '/api': 'http://127.0.0.1:' + (process.env.PORT || env.PORT || 3000) },
    },
  };
});
