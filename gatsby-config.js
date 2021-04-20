module.exports = {
  siteMetadata: {
    title: "web dev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-194982196-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./lessons/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-klipse',
      options: {
        // Klipse config, you can check it here
        // https://github.com/viebel/klipse#configuration
        klipseSettings: {
          selector_eval_js: ".language-js",
          selector_eval_html: ".language-html",
          codemirror_options_in: {
            lineWrapping: true,
            lineNumbers: true
          },
          codemirror_options_out: {
            lineWrapping: true,
            lineNumbers: true
          },
        },
        // Klipse version, defaults to '7.5.0'
        klipseVersion: '7.10.6',
        // To load any external scripts you need, pass an array of URLs. The plugin will always load them before the klipse plugin
        // defaults to an empty Array
        // externalScripts: [],
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            },
          },
        ],
      },
    },
  ],
};
