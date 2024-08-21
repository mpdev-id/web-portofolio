module.exports = {
    content: ["./src/**/*.{html,js}"],
    // theme: {
    //     extend: {
    //         darkBackgroundColor: {
    //             primary: '#17153b',
    //         },
    //         textColor: {
    //             primary: '#c8acd6',
    //         },
    //         secondTextColor: {
    //             primary: '#433D8B',
    //         },
    //         onjectColor: {
    //             primary: '#2E236C',
    //         },
    //     },
    // },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: "cupake", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "cupcake", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        // themeRoot: ":root", // The element that receives theme color CSS variables
        themes: ["dark","cupcake"],
      },
  }
