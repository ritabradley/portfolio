import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import home from '../images/home.svg'
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
        />
        <section className="px-4 py-12">
            <div className="lg:text-left flex flex-wrap items-center -mx-2 text-center">
                <div className="lg:w-1/2 px-2">
                    <img src={home} alt="girl sitting in browser window" />
                </div>
                <div className="lg:w-1/2 lg:pl-16 lg:mt-0 px-2 mt-10">
                    <h2 className="font-display laptop:text-5xl mb-6 text-4xl leading-tight">
                        Hi! My name is Rita and I love to make the internet a
                        more beautiful place, one web app at a time.
                    </h2>
                    <p className="leading-relaxed text-gray-500">
                        I'm a front-end web developer that specializes in UI
                        development. If it can be seen on the screen, I love
                        doing it.
                    </p>
                    <div className="mt-8">
                        <Link className="btn btn-primary mr-6" to="/about/">
                            Learn More
                        </Link>
                        <Link className="btn btn-secondary" to="/contact/">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
