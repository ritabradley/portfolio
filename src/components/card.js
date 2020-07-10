import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Tag from '../components/tag'

const Card = ({ tags, coverImgUrl, title, excerpt, author, avatar, date }) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img
                    src={coverImgUrl}
                    alt="post cover img"
                    className="object-cover w-full h-48"
                />
            </div>
            <div className="bg-primary flex-col justify-between flex-1 p-6">
                {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                ))}

                <h3 className="text-secondary-text mt-2 text-xl font-semibold leading-7">
                    {title}
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                    {excerpt}
                </p>
            </div>
            <div className="flex items-center m-6">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            className="w-10 h-10 rounded-full"
                            alt="author avatar"
                            src={avatar}
                        />
                    </Link>
                </div>
                <div className="ml-3">
                    <p className="text-main-text mx-1 text-sm leading-5">
                        <a
                            href="https://twitter.com/rita_l_bradley"
                            target="_blank"
                            className="hover:underline"
                            rel="noopener noreferrer"
                        >
                            {author}
                        </a>
                    </p>
                </div>
                <div class="flex text-sm leading-5 text-gray-500 mx-1">
                    <time datetime={date}>
                        {moment(date).format('MMM Do, YYYY')}
                    </time>
                </div>
            </div>
        </div>
    )
}

export default Card
