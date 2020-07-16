import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Components
import Layout from '../components/layout'
import PageHeading from '../components/pageHeading'
import SEO from '../components/seo'

// Assets
import contact from '../images/contact.svg'
import { navigate } from 'gatsby'

const style = {
    '--fa-primary-color': '#fcf7ff',
    '--fa-secondary-color': '#e4b363',
    '--fa-primary-opacity': 1,
    '--fa-secondary-opacity': 1,
}

const Contact = () => {
    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&')
    }
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
                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                subject: '',
                                message: '',
                            }}
                            validate={values => {
                                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                const errors = {}
                                if (!values.fullName) {
                                    errors.fullName = 'Required'
                                } else if (values.fullName.length <= 1) {
                                    errors.fullName =
                                        'Must be at least 2 characters long'
                                }

                                if (!values.email) {
                                    errors.email = 'Required'
                                } else if (!emailRegex.test(values.email)) {
                                    errors.email = 'Invalid email address'
                                }

                                if (!values.message) {
                                    errors.message = 'Required'
                                } else if (values.message.length <= 179) {
                                    errors.message =
                                        'Must be at least 180 characters long'
                                }
                                return errors
                            }}
                            onSubmit={(data, { resetForm }) => {
                                fetch('/', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type':
                                            'application/x-www-form-urlencoded',
                                    },
                                    body: encode({
                                        'form-name': 'contact',
                                        ...data,
                                    }),
                                })
                                    .then(() => {
                                        resetForm()
                                        navigate('/thanks/')
                                    })
                                    .catch(error => alert(error))
                            }}
                        >
                            {() => (
                                <Form
                                    name="contact"
                                    data-netlify="true"
                                    data-netlify-recaptcha="true"
                                    netlify-honeypot="bot-field"
                                >
                                    <Field type="hidden" name="form-name" />
                                    <Field type="hidden" name="bot-field" />
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="fullName"
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="fullName" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="message"
                                            component="textarea"
                                            rows="5"
                                            placeholder="Say something..."
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="message" />
                                        </div>
                                    </div>
                                    <div data-netlify-recaptcha="true"></div>
                                    <button
                                        className="btn btn-primary w-full px-8 py-4 leading-none text-white transition-colors duration-300 shadow"
                                        type="submit"
                                    >
                                        <span
                                            className="fad fa-paper-plane"
                                            style={style}
                                        />{' '}
                                        Send it
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact
