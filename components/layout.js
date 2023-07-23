import Head from "next/head";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./MainFooter";
import { siteTitle, navbarHeight, footerHeight } from "../pages/_app";

export default function Layout({ children, home }) {
  return (
    <div className={`flex flex-col`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TopNavbar />
      <main
        className={`flex flex-col absolute bg-tertiary scrollbar-hide overflow-hidden w-full px-sm md:px-md`}
        style={{
          height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          marginTop: `${navbarHeight}`,
          marginBottom: `${footerHeight}`,
        }}
      >
        <div
          className={`flex flex-col grow w-full ${
            home ? "justify-center" : ""
          } scrollbar-hide overflow-auto  py-6`}
          style={{
            height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          }}
        >
          {children}
        </div>
      </main>
      <BottomNavbar />
      <Footer />
    </div>
  );
}
