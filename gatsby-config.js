module.exports = {
  siteMetadata: {
    title: "LifeBoat",
    description: "LifeBoar",
    author: "LifeBoat",
    // siteUrl: "",
  },
  // pathPrefix: "",
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: ["G-52SLBZRN2B"],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: ``,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LifeBoat`,
        short_name: `LifeBoat`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icons*"],
        },
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
  ],
};
