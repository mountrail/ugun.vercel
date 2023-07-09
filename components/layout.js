import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import TopNavbar from "./TopNavbar";

export const fullName = "Ahmad Gunawan";
export const siteTitle = "Next.js Sample Website";
export const navbarHeight = "60px";
const footerHeight = "60px";
export const paddingX = "60px";

export default function Layout({ children, home }) {
  return (
    <div className={` flex flex-col`}>
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
      <TopNavbar height={navbarHeight} />
      <main
        className={`flex flex-col absolute bg-tertiary scrollbar-hide overflow-hidden w-full`}
        style={{
          height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          marginTop: `${navbarHeight}`,
          marginBottom: `${footerHeight}`,
          paddingLeft: `${paddingX}`,
          paddingRight: `${paddingX}`,
        }}
      >
        <div
          className={`flex flex-col grow w-full ${
            home ? "justify-center" : ""
          } scrollbar-hide overflow-auto`}
          style={{
            height: `calc(100vh - (${navbarHeight} + ${footerHeight} ))`,
          }}
        >
          {children}
        </div>
      </main>
      <footer
        className="flex bg-secondary justify-between items-center fixed inset-x-0 bottom-0"
        style={{
          height: footerHeight,
          paddingLeft: `${paddingX}`,
          paddingRight: `${paddingX}`,
        }}
      >
        <div>PORTFOLIO &copy; 2023</div>
        <div></div>
      </footer>
    </div>
  );
}
