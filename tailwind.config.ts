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
        'sm-panes:': 'url("https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794027/Trapiche/cgbgql0tmupgvdly2g5l.jpg")',
        'lg-panes:': 'url("https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1697413842/Trapiche/lsgceibitwu69x9ntulf_hyrbwy.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
      textShadow: {
        'black-outline': '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
export default config
