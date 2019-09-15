import React from "react";
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Education = ({ education }) => {
    const educationBanner = "/static/banner_education-1920.webp";

    return (
    <Layout>
        <Head>
            <title>Education - Next.js</title>
        </Head>
        <Banner imageUrl={educationBanner}/>
        <div className="container">
            <h1>Education</h1>
            <section className="center">
                {education.map((value, index) => {
                    return <Card key={index} education={value} />
                })}
            </section>
        </div>
    </Layout>);
};

Education.getInitialProps = async ({ req }) => {
    const res = await fetch('https://us-central1-tfg2019-ae3f8.cloudfunctions.net/api/education');
    const json = await res.json();
    console.log(json);
    return { education: json };
};

export default Education;
