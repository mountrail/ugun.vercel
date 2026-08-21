import Head from "next/head";
import Layout from "../components/layout";
import { fullName, siteTitle } from "./_app";
import ButtonPrimary from "../components/ButtonPrimary";
import { AnimatePresence, motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import styles from "../styles/Hero.module.css";

const roles = [
  {
    mode: "dev",
    label: "a Full-Stack Developer",
    tag: "SYSTEM · DEV_MODE",
    detail: "Next.js · React · PHP · MySQL",
  },
  {
    mode: "dev",
    label: "a Creative Editor",
    tag: "SYSTEM · DEV_MODE",
    detail: "Photoshop · Premiere Pro · Excel",
  },
  {
    mode: "field",
    label: "an IT Specialist, Brimob TIK Division",
    tag: "SYSTEM · FIELD_MODE",
    detail: "1st Regiment · Kedung Halang, Bogor",
  },
];
const tickerText = {
  dev: `NPM RUN BUILD   ·   GIT COMMIT -M "SHIP IT"   ·   USEEFFECT()   ·   200 OK   ·   COMPILING MODULE`,
  field: `UNIT STATUS: NOMINAL   ·   COORD -3.4166, 114.8333   ·   CHANNEL CLEAR   ·   BRIMOB TIK DIVISION`,
};
export default function Home() {
  const { text, index } = useTypewriter(roles.map((r) => r.label));
  const role = roles[index];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}Home</title>
      </Head>
      <section className={styles.hero} data-mode={role.mode}>
        <div className={styles.grid} aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={role.mode}
            className={styles.tickerWrap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
          >
            <div className={styles.tickerTrack}>
              <span>{tickerText[role.mode]}</span>
              <span>{tickerText[role.mode]}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className={styles.tag}
          key={role.tag}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className={styles.dot} />
          {role.tag}
        </motion.div>

        <h3 className="mb-6 uppercase text-4xl md:text-6xl font-bold">
          <span>{fullName}</span>
        </h3>
        <span className="block w-10 md:w-16 h-0.5 md:h-1.5 mb-6 bg-primary" />

        <div className="flex mb-2 md:text-xl items-center">
          <span className="mr-1 font-light">I&apos;m</span>
          <span className="font-bold">
            {text}
            <span className={styles.cursor}>|</span>
          </span>
        </div>

        <motion.div
          key={role.detail}
          className={styles.detail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {role.detail}
        </motion.div>

        <div className="mt-8">
          <ButtonPrimary message={"More About Me..."} url={"/about"} />
        </div>
      </section>
    </Layout>
  );
}