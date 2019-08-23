import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <Head>
            <title>Home</title>
        </Head>
        <div className={"bar-margin"}>
            <h1>Hello Next.js</h1>
        </div>
    </Layout>
);

export default Index;
