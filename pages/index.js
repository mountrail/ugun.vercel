import Head from "next/head";
import Layout, {
  siteTitle,
  fullName,
  navbarHeight,
  footerHeight,
} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>{/* image */}</div>
        <h3 className="mb-6 uppercase text-5xl font-bold">{fullName}</h3>
        <span className={`block w-16 h-1.5 mb-6 bg-primary`} />
      </section>
    </Layout>
  );
}
