const withNextra = require("nextra")({
  primaryHue: 120,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});
module.exports = withNextra({
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/docs/front-end",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/front-end",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/docs/front-end",
        statusCode: 302,
      },
    ];
  },
});
