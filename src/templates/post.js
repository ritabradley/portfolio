import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Tag from '../components/tag'
import { graphql } from 'gatsby'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default ({ data }) => {
    const post = data.gcms.posts[0]
    const { publishedAt } = post

    const formattedPublishedAt = moment(publishedAt).format('MMM D, YYYY')

    return (
        <Layout>
            <SEO title={post.title} keywords={post.tags} />
            <article>
                <div
                    class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative text-left"
                    style={{ height: `24em` }}
                >
                    <div class="absolute left-0 bottom-0 w-full h-full z-10 overlay"></div>
                    <img
                        src={post.coverImage.url}
                        alt={post.title}
                        class="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />
                    <div class="p-4 absolute bottom-0 left-0 z-20">
                        {post.tags.map(tag => (
                            <Tag>{tag}</Tag>
                        ))}
                        <h2 class="text-3xl font-semibold text-white leading-tight px-1">
                            {post.title}
                        </h2>
                        <div class="flex justify-between mt-3">
                            <div className="flex">
                                <img
                                    src={post.author.picture.url}
                                    class="h-10 w-10 rounded-full mr-2 object-cover"
                                />
                                <div>
                                    <p class="font-semibold text-gray-200 text-sm">
                                        {' '}
                                        {post.author.name}{' '}
                                    </p>
                                    <p class="font-semibold text-gray-400 text-xs">
                                        {' '}
                                        {formattedPublishedAt} (
                                        {moment(publishedAt).fromNow()})
                                    </p>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                    className="btn btn-sm btn-primary twitter-share-button"
                                    data-text="Check out this post from @rita_l_bradley"
                                    data-hashtags="blog post"
                                    data-show-count="true"
                                >
                                    <FontAwesomeIcon icon={faTwitter} /> Tweet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Markdown
                className="post-content lg:px-0 max-w-screen-md px-4 mx-auto mt-12 text-lg leading-relaxed text-left"
                source={post.content.markdown}
                escapeHtml={false}
            />
            <hr />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        gcms {
            posts(where: { slug: $slug }) {
                id
                slug
                tags
                title
                publishedAt
                coverImage {
                    url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
                content {
                    markdown
                }
            }
        }
    }
`
