import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const ThanksPage = () => {
    return (
        <Layout>
            <SEO
                title="Thank you!"
                description="Thank you for reaching out to me. I'll be sure to get back to you ASAP"
            />
            <section className="px-4 py-12 text-center">
                <div className="w-full max-w-2xl mx-auto">
                    <h2 className="font-display text-main-accent text-5xl leading-tight">
                        Thanks for reaching out to me!
                    </h2>
                    <p className="mt-6 mb-8 leading-relaxed">
                        I'll be sure to read and respond to your message with
                        24-48 hours. I look forward to speaking with you.
                    </p>
                    <Link
                        className="btn btn-primary transition-colors duration-300"
                        to="/"
                    >
                        Go home
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

export default ThanksPage
