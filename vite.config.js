import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config();





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Make process.env available in your code
    'process.env': process.env,
  },
});
