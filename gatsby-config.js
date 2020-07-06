const path = require(`path`)

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rita Bradley | Web Developer`,
                short_name: `RBradley`,
                start_url: `/`,
                background_color: `#0A100D`,
                theme_color: `#A93541`,
                display: `standalone`,
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/about/`, `/blog/`, `/projects/*`],
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                // Arbitrary name for the remote schema Query type
                typeName: 'GraphCMS',
                // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: 'gcms',
                // Url to query from
                url:
                    'https://api-us-west-2.graphcms.com/v2/ckc971p6o06ew01za8nzg93ha/master',
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Quicksand', 'Montserrat'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: process.env.GOOGLE_OPTIMIZE_TRACKING_ID,
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'example.com',
            },
        },
    ],
}
