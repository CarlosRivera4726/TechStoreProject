import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@router': path.resolve(import.meta.dirname, './src/router'),
            '@components': path.resolve(import.meta.dirname, './src/components'),
            '@pages': path.resolve(import.meta.dirname, './src/pages'),
            '@assets': path.resolve(import.meta.dirname, './src/assets'),
            '@config': path.resolve(import.meta.dirname, './src/config'),
            '@interfaces': path.resolve(import.meta.dirname, './src/interfaces'),
        },
    },
})
