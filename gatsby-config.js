/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = require('./config')
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ 'gatsby-plugin-react-helmet',"gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: config.manifestName,
      short_name: config.manifestShortName,
      start_url: config.pathPrefix || config.manifestStartUrl,
      background_color: config.manifestBackgroundColor,
      theme_color: config.manifestThemeColor,
      display: config.manifestDisplay,
      icon: config.manifestIcon,
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    
  'gatsby-plugin-sass',
  'gatsby-plugin-offline',
]
};