/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  theme: {
    extend: {},
    screens:{md:{ max: "1050px"}, sm:{max:"550px"}
  },
  plugins: [],
}
}

