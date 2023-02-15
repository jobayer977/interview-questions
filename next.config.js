const withNextra = require("nextra")({
  primaryHue: 331,
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
        destination: "/docs/lets-start",
        statusCode: 301,
      },
      {
        source: "/advanced/performance",
        destination: "/docs/advanced/performance",
        statusCode: 301,
      },
      {
        source: "/advanced/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/options",
        destination: "/docs/api",
        statusCode: 301,
      },
      {
        source: "/change-log",
        destination: "/docs/change-log",
        statusCode: 301,
      },
      {
        source: "/blog/swr-1",
        destination: "/blog/swr-v1",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/lets-start",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
});
