import Head from "next/head";
import Layout from "../components/layout";
import { fullName, siteTitle } from "./_app";
import utilStyles from "../styles/utils.module.css";
import ButtonPrimary from "../components/ButtonPrimary";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}Home</title>
      </Head>
      <section>
        <div>{/* image */}</div>
        <h3 className="mb-6 uppercase text-4xl md:text-5xl font-bold ">
          <span>{fullName}</span>
        </h3>
        <span className={`block w-10 md:w-16 h-0.5 md:h-1.5 mb-6 bg-primary`} />
        <div className="flex mb-6 md:text-xl">
          <span className="mr-1 font-light">I&apos;m</span>
          <span className="font-bold">
            <TypewriterComponent
              options={{
                strings: ["a Programmer", "a Freelancer", "an Editor"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <ButtonPrimary message={"More About Me..."} url={"/about"} />
      </section>
    </Layout>
  );
}
