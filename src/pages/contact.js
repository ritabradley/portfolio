import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Components
import Layout from '../components/layout'
import PageHeading from '../components/pageHeading'
import SEO from '../components/seo'

// Assets
import contact from '../images/contact.svg'
// import { navigate } from 'gatsby'

const style = {
    '--fa-primary-color': '#fcf7ff',
    '--fa-secondary-color': '#e4b363',
    '--fa-primary-opacity': 1,
    '--fa-secondary-opacity': 1,
}
const formSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Please provide your email address'),
    message: Yup.string().required('Please say something'),
})
const Contact = () => {
    const [serverState, setServerState] = useState()
    const handleServerResponse = (ok, msg) => {
        setServerState({ ok, msg })
    }
    const handleOnSubmit = (values, actions) => {
        axios({
            method: 'POST',
            url: 'https://formspree.io/xbjzpqle',
            data: values,
        })
            .then(response => {
                actions.setSubmitting(false)
                actions.resetForm()
                handleServerResponse(true, "Thanks! I'll be in touch soon.")
            })
            .catch(error => {
                actions.setSubmitting(false)
                handleServerResponse(false, error.response.data.error)
            })
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
                            onSubmit={handleOnSubmit}
                            validationSchema={formSchema}
                        >
                            {({ isSubmitting }) => (
                                <Form id="fs-frm" noValidate>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="fullName"
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage
                                            name="fullName"
                                            className="errorMsg"
                                            component="p"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            className="errorMsg"
                                            component="p"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Field
                                            className="focus:bg-secondary focus:bg-opacity-25 focus:border-gray-300 focus:outline-none text-main-text bg-primary focus:border-opacity-50 block w-full px-4 py-3 leading-tight placeholder-gray-300 border border-gray-200 border-opacity-75 rounded appearance-none"
                                            name="message"
                                            rows="5"
                                            id="message"
                                            component="textarea"
                                            rows="5"
                                            placeholder="Say something..."
                                        />
                                        <ErrorMessage
                                            name="message"
                                            className="errorMsg"
                                            component="p"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary w-full px-8 py-4 leading-none text-white transition-colors duration-300 shadow"
                                        >
                                            <span
                                                className="fad fa-paper-plane"
                                                style={style}
                                            />{' '}
                                            Submit
                                        </button>
                                    </div>
                                    {serverState && (
                                        <p
                                            className={
                                                !serverState.ok
                                                    ? 'py-1 errorMsg'
                                                    : 'py-1'
                                            }
                                        >
                                            {serverState.msg}
                                        </p>
                                    )}
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
