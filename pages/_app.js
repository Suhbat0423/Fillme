import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import "./globals.css";
import { useRouter } from "next/router";
import { useState } from "react";

// const [check, setCheck] = useState();

export default function App({ Component, pageProps }) {
  const checkName = () => {
    const router = useRouter();
    if (router.pathname === "/login" && router.pathname === "/register") {
    }
  };

  checkName();
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
