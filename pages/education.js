import React from "react";
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

const Education = ({ stars }) => (
    <Layout>
        <Head>
            <title>Education</title>
        </Head>
        <div className={"bar-margin"}>
            <h1>Hello Education Next.js</h1>
            <p>Next.js have { stars } stars on github</p>
        </div>
    </Layout>
);

Education.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
};

export default Education;
