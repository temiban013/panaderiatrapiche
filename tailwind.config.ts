import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"', 'Inter', 'sans-serif'],
      },
      backgroundImage: theme => ( {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
      textShadow: {
        'black-outline': '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'trapiche-orange': '#dd612d',
      'trapiche-tan': '#fed3a1',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
export default config
