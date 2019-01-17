import React from "react";
import Head from "next/head";

const Page = ({ children }) => {
  return (
    <>
      <Head>
        <title>Anna Martens-Artemov | Diplom Sozialpädagogin, Zertifizerte Coach</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
