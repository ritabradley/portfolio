import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageHeading from '../components/pageHeading'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = ({ data }) => {
    const { authors } = data.gcms
    return (
        <Layout>
            <SEO
                title="About Me"
                keywords={[
                    `frontend`,
                    `web developer`,
                    `javascript`,
                    `html`,
                    `react`,
                    `css`,
                    `developer`,
                ]}
            />
            <section>
                <PageHeading title="A Bit About Myself" />
                <div className="container flex flex-col px-5 py-2 mx-auto">
                    <div className="laptop:w-4/6 mx-auto">
                        <div className="sm:flex-row flex flex-col mt-10">
                            <div className="sm:w-1/3 sm:pr-8 sm:py-8 text-center">
                                <img
                                    src={authors[0].picture.url}
                                    alt="Rita Bradley"
                                    className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                                />
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className="title-font mt-4 font-medium">
                                        {authors[0].name}
                                    </h2>
                                    <div className="bg-main-accent w-12 h-1 mt-2 mb-4 rounded"></div>
                                    <p className="text-base text-gray-500">
                                        {authors[0].bibliography}
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-secondary-accent sm:border-t-0 sm:mt-0 sm:text-left pt-4 mt-4 text-center border-t">
                                <p className="mb-4 text-lg leading-relaxed">
                                    It all started with{' '}
                                    <a
                                        href="https://www.myspace.com"
                                        className="hover:text-main-accent underline transition-colors duration-300"
                                    >
                                        MySpace
                                    </a>
                                    . Somewhere around my junior year of high
                                    school I was just designing background
                                    images for friends’ Myspace pages. Then I
                                    proceeded to learn to manipulate the CSS so
                                    I could customize my page to match whatever
                                    I was into at the time. I'd sometimes design
                                    my friends' Myspace profiles too. I feel
                                    like that is how a lot of web
                                    designers/developers cut their teeth
                                    honestly.
                                </p>
                                <p className="mb-4 text-lg leading-relaxed">
                                    Fast forward to 2014, I decided to go to
                                    school and get my associate’s degree in web
                                    graphic design and I’m in the process of
                                    earning my bachelor’s in web design and
                                    development. The decision to get into this
                                    field was an easy one. I just took the
                                    advice my grandfather had given me long ago.
                                    He said when choosing a career, choose
                                    something you’d want to do even if no one
                                    paid you. That is, has been and will always
                                    be design and soon development. I mean that
                                    wholeheartedly. I spend a vast majority of
                                    my time at my computer coding for kicks,
                                    designing for giggles, and continuously
                                    learning new processes.
                                </p>
                                <p className="mb-4 text-lg leading-relaxed">
                                    When I’m not building projects, you’ll find
                                    me watching true crime documentaries,
                                    cartoons with my son, or whatever weird
                                    thing my boyfriend puts on. I can also be
                                    found cooking some seriously delicious meals
                                    and goodies. My cajun crab macaroni and
                                    cheese is pretty famous around the house, as
                                    is my eggplant parmesan. I love to eat and I
                                    like finding new recipes for my family to
                                    enjoy. I think that's what's life is all
                                    about. Experiencing the things you enjoy.
                                </p>
                                <p className="mb-4 text-lg leading-relaxed"></p>
                                <div className="my-2">
                                    <a
                                        href="https://twitter.com/rita_l_bradley?ref_src=twsrc%5Etfw"
                                        className="btn btn-primary"
                                        data-show-count="false"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />{' '}
                                        Follow me on Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        gcms {
            authors {
                name
                bibliography
                picture {
                    url
                }
            }
        }
    }
`
