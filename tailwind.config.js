module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          "primary": '#0FCFEC',
          "secondery": '#19D3AE',
          "accent": '#3A4256',
        },
      }

    ]
  },
  plugins: [require("daisyui")],
}
