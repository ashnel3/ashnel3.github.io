/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'blink-1': 'blink 1s steps(5, start) 1s infinite',
      },
      fontFamily: {
        m5x7: ['"m5x7"'],
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
}
