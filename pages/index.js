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
            <h1>Hello Next.js</h1>
        </div>
    </Layout>);
};

export default Index;
