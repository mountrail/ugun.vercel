import Head from "next/head";
import Layout, { primaryColor, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { fullName } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} slate-50 px-4`}>
        <div>
          {/* image */}
        </div>
        <div>
          <h3 className="mb-6 uppercase text-5xl font-bold">{fullName}</h3>
          <span className={`block w-16 h-1.5 mb-6 bg-${primaryColor}`} />
        </div>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
