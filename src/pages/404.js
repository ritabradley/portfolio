import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeHeart } from '@fortawesome/pro-duotone-svg-icons'
import ghost from '../images/404.svg'

const PageNotFound = () => {
    return (
        <Layout>
            <section className="px-4 py-8 text-center">
                <div className="max-w-auto md:max-w-lg mx-auto">
                    <img
                        className="mb-8"
                        src={ghost}
                        alt="ghost being abducted by aliens"
                    />
                    <h2 className="font-display text-main-accent mb-2 text-5xl font-bold">
                        Oh no!!!
                    </h2>
                    <p className="mb-6">
                        The ghost of this page was abducted by aliens.
                    </p>
                </div>
                <div>
                    <Link
                        className="hover:underline px-4 text-base font-medium text-gray-500"
                        to="/"
                    >
                        <FontAwesomeIcon
                            icon={faHomeHeart}
                            className="text-main-accent"
                        />{' '}
                        Go back home
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

export default PageNotFound
