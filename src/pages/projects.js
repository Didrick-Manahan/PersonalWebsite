import React from "react";
import Head from "next/head";
import Layout from "@/components/Layouts";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
  return (
    <>
      <Head>
        <title>Didrick Manahan | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className=" w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className=" pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" />
          <div className=" grid grid-cols-12 gap-24 "></div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
