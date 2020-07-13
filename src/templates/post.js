import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/layout'
import Tag from '../components/tag'
import { graphql } from 'gatsby'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default ({ data }) => {
    const post = data.gcms.posts[0]
remove    const { publishedAt } = post

    const formattedPublishedAt = moment(publishedAt).format('MMM D, YYYY')

    return (
        <Layout>
            <article
                className="tablet:mb-0 max-w-screen-laptop relative w-full mx-auto mb-4"
                style={{ height: '24rem' }}
            >
                <div className="overlay absolute bottom-0 left-0 z-10 w-full h-full"></div>
                <img
                    alt={post.title}
                    src={post.coverImage.url}
                    className="absolute top-0 left-0 z-0 object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 z-20 p-4 text-left">
                    {post.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                    <h1 className="laptop:text-3xl p-1 text-2xl font-semibold leading-tight text-white">
                        {post.title}
                    </h1>
                    <div className="flex justify-between mt-3">
                        <div className="flex">
                            <img
                                src={post.author.picture.url}
                                alt="author avatar"
                                className="object-cover w-10 h-10 mr-2 rounded-full"
                            />
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-gray-200">
                                    {' '}
                                    {post.author.name}{' '}
                                </p>
                                <p className="text-xs font-semibold text-gray-400">
                                    {' '}
                                    {formattedPublishedAt}{' '}
                                    <span className="font-normal">
                                        ({moment(publishedAt).fromNow()})
                                    </span>
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
            </article>
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
