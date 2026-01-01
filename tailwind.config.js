module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Header
        "header-bg": "#faf5f2",
        "header-text": "#2f3336",
        "header-link": "#2f3336",
        "header-link-hover": "#a76111",
        "header-border": "rgb(222, 218, 216)",
        "header-menu": "#2f3336",
        "header-menu-hover": "#a76111",
        "header-dropdown-title": "#2f3336",
        "header-dropdown-text": "#6c747b",
        "header-dropdown-bg": "#ffffff",
        "header-dropdown-border": "#f1f1f1",
        "header-topbar-bg": "#f5f5f5",
        "header-topbar-border": "#e1e1e1",
        "header-topbar-text": "#000000",

        // Labels
        "label-text": "#ffffff",
        "label-new": "#e35353",
        "label-hot": "#5369e3",
        "label-sale": "#34bf49",
        "label-other": "#848484",

        // Reviews (jdgm)
        "review-primary": "#A76111",
        "review-secondary": "rgba(167, 97, 17, 0.1)",
        "review-star": "#A76111",
        "review-text": "#ffffff",
        "review-bg": "#A76111",
        "review-paginate": "#A76111",
        "review-name": "#A76111",

        // Global
        "main": "#000000",
        "main-accent": "#a76111",
        "heading": "#000000",
        "cta-text": "#000000",

        // Alerts
        "alert": "#000000",
        "alert-bg": "#a76111",
        "alert-border": "#bf996d",

        // Sale badge
        "sale-bg": "#84c8bb",
        "sale-text": "#ffffff",

        // Inputs
        "input-border": "#dee2e6",
      }

    },
  },
  plugins: [],
};