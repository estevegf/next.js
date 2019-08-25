import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Index = () => {
    const indexBanner  = "/static/banner.svg";

    return (
    <Layout>
        <Head>
            <title>Home</title>
        </Head>
        <Banner imageUrl={indexBanner}/>
        <div className={"container"}>
            <section>
                <h2>Who am I?</h2>
                <p>I am Esteve Genovard Ferriol. I was born in Mallorca, where I spent my childhood. Nowadays, I am a
                    computer engineer graduated in La Salle Campus Barcelona, Ramon Llull University, 2014-2018.
                </p>
            </section>
            <section>
                <h3>Experience</h3>
                <div>
                    <div className={"card l-6"}>
                        <img className={"circular"} src="/static/experience-esteve.svg" height="120" alt="experience Funitec La Salle"/>
                        <div>
                            <h4>Intership - Funitec</h4>
                            <ul>
                                <li>Direct contact with suppliers of la Salle</li>
                                <li>Electronic university store administration</li>
                                <li>Stock managment</li>
                            </ul>
                        </div>
                    </div>

                    <div className={"card l-6"}>
                        <img className={"circular"} src="/static/experience-esteve.svg" height="120" alt="experience Funitec La Salle"/>
                        <div>
                            <h4>Frontend Developer - Uniks</h4>
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
                -webkit-box-align: center;
                align-items: center;
           }
           
           .circular {
                border-radius: 50%;
                border: 2px solid green;
                margin: 1em 2em 1em 3em;
           }
           
           @media (max-width: 600px) {
               .circular {
                   margin: 1em 2em 1em 0em;
               }
           }
           
           ul {
                padding-left: 0;
           }
        `}</style>
    </Layout>);
};

export default Index;
