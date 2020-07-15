import React from 'react'

import Layout from '../components/layout'
import PageHeading from '../components/pageHeading'
import SEO from '../components/seo'
import contact from '../images/contact.svg'

const style = {
    '--fa-primary-color': '#fcf7ff',
    '--fa-secondary-color': '#e4b363',
    '--fa-primary-opacity': 1,
    '--fa-secondary-opacity': 1,
}

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact Me" />
            <PageHeading title="Let's have a chat" />
            <section className="px-4 py-12">
                <div className="flex flex-wrap items-center -mx-6">
                    <div className="laptop:w-1/2 laptop:px-24 laptop:mb-0 w-full px-6 mb-8">
                        <img src={contact} alt="forms of communication" />
                    </div>
                    <div className="laptop:w-1/2 w-full px-6">
                        <form
                            method="post"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            name="contact"
                        >
                            <input type="hidden" name="bot-field" />
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div className="mb-4">
                                <input
                                    className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight border border-gray-200 border-opacity-75 rounded appearance-none"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight border border-gray-200 border-opacity-75 rounded appearance-none"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight border border-gray-200 border-opacity-75 rounded appearance-none"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight border border-gray-200 border-opacity-75 rounded appearance-none"
                                    placeholder="Tell me something..."
                                    name="message"
                                    rows="5"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full px-8 py-4 leading-none text-white shadow"
                                >
                                    <span
                                        className="fad fa-paper-plane"
                                        style={style}
                                    />{' '}
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact
