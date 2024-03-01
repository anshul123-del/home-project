import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
envprefix:"REACT_APP_"
export default defineConfig({
  plugins: [react(),envCompatible()],
})
