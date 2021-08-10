module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          toggleBackground: "var(--color-toggleBackground)",
          screenBackground: "var(--color-screenBackground)",
          keyColor: "var(--color-keyColor)",
          keyBack: "var(--color-keyBack)",
          keyRedColor: "var(--color-keyRedColor)",
        },
      },
      textColor: {
        skin: {
          keytextColor: "var(--color-keytextColor)",
          globalText: "var(--color-globalColor)",
          equalText:"var(--color-equalVal)",
        },
      },
      borderColor: {
        skin: {
          KeyShadow: "var(--color-KeyShadow)",
          keyRedColorShadow: "var(--color-keyRedColorShadow)",
          keyBackShadow: "var(--color-keyBackShadow)",
        },
      },
      fontSize: {
        btnFont: "32px",
      },
      colors: {
        mainColor: "var(--color-fill)",
        toggleBackground: "hsl(223, 31%, 20%)",
        screenBackground: " hsl(224, 36%, 15%)",
        keyColor: "hsl(30, 25%, 89%)",
        KeyShadow: "hsl(28, 16%, 65%)",
        keyBack: "hsl(225, 21%, 49%)",
        keyBackShadow: "hsl(224, 28%, 35%)",
        keyRedColor: "hsl(6, 63%, 50%)",
        keyRedColorShadow: "hsl(6, 70%, 34%)",
        keytextColor: "hsl(221, 14%, 31%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
