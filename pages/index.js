import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Index = () => {
    const indexBanner  = "/static/banner_home-1920.webp";

    return (
    <Layout>
        <Head>
            <title>Home - Next.js</title>
        </Head>
        <Banner imageUrl={indexBanner}/>
        <div className="container">
            <div>
                <h1>Who am I?</h1>
                <p>I am Esteve Genovard Ferriol. I was born in Mallorca, where I spent my childhood. Nowadays, I am a
                    computer engineer graduated in La Salle Campus Barcelona, Ramon Llull University, 2014-2018.
                </p>
            </div>
            <section>
                <h2>Experience</h2>
                <div>
                    <div className="card l-6">
                        <img className="circular" src="/static/experience-funitec.svg" width="100" alt="experience Funitec La Salle"/>
                        <div>
                            <h3>Intership - Funitec</h3>
                            <ul>
                                <li>Direct contact with suppliers of la Salle</li>
                                <li>Electronic university store administration</li>
                                <li>Stock managment</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card l-6">
                        <img className="circular" src="/static/experience-uniks.svg" width="100" alt="experience Uniks"/>
                        <div>
                            <h3>Frontend Developer - Uniks</h3>
                            <ul>
                                <li>Website developer: www.uniks.com</li>
                                <li>CMS developer</li>
                                <li>Facebook application developer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <style jsx>{`
           .card {
                display: inline-flex;
                width: 100%;
                -webkit-box-align: baseline;
                align-items: baseline;
           }
           
           .circular {
                margin: 1em 2em auto 1em;
            }
           
           @media (max-width: 600px) {
               .circular {
                   width: 80px;
               }
           }
           
           p {
                text-align: justify;
           }
           
           ul {
                padding-left: 0;
           }
        `}</style>
    </Layout>);
};

export default Index;
