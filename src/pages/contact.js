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
const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
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
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                subject: '',
                                message: '',
                            }}
                            onSubmit={(
                                values,
                                { resetForm, setSubmitting }
                            ) => {
                                fetch('/', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type':
                                            'application/x-www-form-urlencoded',
                                    },
                                    body: encode({
                                        'form-name': 'contact',
                                        ...values,
                                    }),
                                })
                                    .then(() => {
                                        resetForm()
                                        navigate('/thanks/')
                                    })
                                    .catch(error => alert(error))
                                    .finally(() => setSubmitting(false))
                            }}
                            validate={values => {
                                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                const errors = {}
                                if (!values.name) {
                                    errors.name = 'Name Required'
                                }
                                if (
                                    !values.email ||
                                    !emailRegex.test(values.email)
                                ) {
                                    errors.email = 'Valid Email Required'
                                }
                                if (!values.message) {
                                    errors.message = 'Message Required'
                                }
                                return errors
                            }}
                        >
                            {() => (
                                <Form
                                    method="post"
                                    netlify-honeypot="bot-field"
                                    data-netlify-recaptcha="true"
                                    data-netlify="true"
                                    name="contact"
                                    action="/thanks"
                                >
                                    <Field type="hidden" name="bot-field" />
                                    <Field
                                        type="hidden"
                                        name="form-name"
                                        value="contact"
                                    />
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="name" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            placeholder="Tell me something..."
                                            name="message"
                                            rows="5"
                                            component="textarea"
                                        />
                                        <div className="text-main-accent text-xs font-semibold text-left">
                                            <ErrorMessage name="message" />
                                        </div>
                                    </div>
                                    <div data-netlify-recaptcha="true"></div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-full px-8 py-4 leading-none text-white transition-colors duration-300 shadow"
                                        >
                                            <span
                                                className="fad fa-paper-plane"
                                                style={style}
                                            />{' '}
                                            Submit
                                        </button>
                                    </div>
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
