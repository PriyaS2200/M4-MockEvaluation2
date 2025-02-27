import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  base: "/M4-MockEvaluation2",
  plugins: [react(), tsconfigPaths()],
})
