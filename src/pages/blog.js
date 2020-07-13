import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'
import PageHeading from '../components/pageHeading'

const Blog = ({ data }) => {
    const { posts } = data.gcms
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
            <div className="laptop:grid-cols-3 laptop:max-w-none grid max-w-lg gap-5 mx-auto mt-12">
                {posts.map(post => (
                    <Card
                        key={post.id}
                        coverImgUrl={post.coverImage.url}
                        tags={post.tags}
                        title={post.title}
                        excerpt={post.excerpt}
                        avatar={post.author.picture.url}
                        author={post.author.name}
                        date={post.date}
                        slug={post.slug}
                    />
                ))}
            </div>
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
                slug
                date
                author {
                    name
                    picture {
                        url
                    }
                }
                coverImage {
                    url
                }
            }
        }
    }
`
