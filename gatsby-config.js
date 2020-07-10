const path = require(`path`)

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Rita Bradley - Web Developer`,
        author: `Rita Bradley`,
        description: `You're looking for a top-notch web developer to help build the next big thing. Look no further. Hi! 👋🏽 I'm Rita and I can't wait to help bring your vision to life.`,
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
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

                refetchInterval: 180,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: [
                        'Montserrat Alternates:wght@600;700',
                        'Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700',
                    ],
                },
            },
        },
    ],
}
