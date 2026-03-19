/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberYellow: '#fffb00',
        cyberBlack: '#050505',
        cyberDark: '#101010',
        glitchRed: '#ff003c',
        glitchBlue: '#00f0ff',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        cyber: ['Rajdhani', 'Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
