import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Tag from '../components/tag'
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
                    className="md:mb-0 relative w-full max-w-screen-md mx-auto mb-4 text-left"
                    style={{ height: `24em` }}
                >
                    <div className="overlay absolute bottom-0 left-0 z-10 w-full h-full"></div>
                    <img
                        src={post.coverImage.url}
                        alt={post.title}
                        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 z-20 w-full p-4">
                        {/* {post.tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))} */}
                        <h2 className="px-1 text-3xl font-semibold leading-tight text-white">
                            {post.title}
                        </h2>
                        <div className="flex justify-between mt-3">
                            <div className="flex">
                                <img
                                    src={post.author.picture.url}
                                    className="object-cover w-10 h-10 mr-2 rounded-full"
                                    alt="author avatar"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-200">
                                        {' '}
                                        {post.author.name}{' '}
                                    </p>
                                    <p className="text-xs font-semibold text-gray-400">
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
                className="post-content lg:px-0 max-w-screen-md px-4 mx-auto mt-12 leading-relaxed text-left"
                source={post.content.markdown}
                escapeHtml={false}
            />
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
