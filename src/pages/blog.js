import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeading from '../components/pageHeading'

const Blog = () => {
    return (
        <Layout>
            <SEO
                title="Blog"
                description="Get a glimpse into my random thoughts, projects, struggles (which I overcome) to understand this amazing profession (hobby) of mine."
                keywords={[
                    `frontend`,
                    `web developer`,
                    `javascript`,
                    `html`,
                    `react`,
                    `css`,
                    `tailwind css`,
                    `developer`,
                    `blog`,
                    `blogging`,
                    `posts`,
                ]}
            />
            <PageHeading
                title="Hot Off My Hamster Wheel"
                description="Get a glimpse into my random thoughts, projects, struggles (which I overcome) to understand this amazing profession (hobby) of mine."
            />
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query {
        gcms {
            posts(orderBy: date_DESC) {
                id
                title
                excerpt
                tags
                date
                coverImage {
                    url
                }
            }
        }
    }
`
