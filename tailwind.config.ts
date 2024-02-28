import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const obj: Record<string, any> = {};
Object.keys(colors).forEach((ele) => {
  if(ele in colors){
    obj[ele] = (colors as any)[ele];
  }
})

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: '#212121',
      secondary: '#ecc94b',
      ...obj
    }
  },
  plugins: [],
};
export default config;
