/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-wallpaper":
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"%23f1f5f9\"%3E%3Cpath d=\"M0 .5H31.5V32\"/%3E%3C/svg%3E')",
      },
      colors: {
        red: {
          default:'#f53855'
        },
        purple: {
          DEFAULT: '#6D28D9'
        },
        green: {
          DEFAULT: '#198754'
        },
        customPink: {
          DEFAULT: '#B3489A'
        },
        customGray: {
          DEFAULT: 'rgb(248 250 252)',
        },
        black: {
          DEFAULT: '#000000'
        }
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
