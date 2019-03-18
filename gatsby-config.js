module.exports = {
  siteMetadata: {
    title:`RedCarpet`,
    description: `default Description`,
    siteUrl:`https://immense-brook.netlify.com`,
    defaultImage: ``,
    author: `@RedcarpetUp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        sourceMap: true,
        loader: 'sass-resources-loader',
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ],

      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/jobs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: 'transparent'
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          // The top level query type, can be anything you want!
          typeName: "GCMS",
          // The field you'll query against, can also be anything you want.
          fieldName: "gcmsdata",
          // Your API endpoint, available from the dashboard and settings window.
          url: "https://api-euwest.graphcms.com/v1/cjswavs8bb4mr01fjdtcp52i1/master",
      },
  },
  `gatsby-plugin-sitemap`,
  'gatsby-plugin-offline',
  ],
}
