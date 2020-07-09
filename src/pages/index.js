import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
    <Layout>
        <SEO
            keywords={[
                `frontend`,
                `web developer`,
                `javascript`,
                `html`,
                `react`,
                `css`,
                `developer`,
                `theming`,
            ]}
            title="Home"
            description={`You're looking for a top-notch web developer to help build the next big thing. Look no further. Hi! 👋🏽 I'm Rita and I can't wait to help bring your vision to life.`}
        />
        Hello world!
    </Layout>
)
