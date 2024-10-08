import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { siteTitle, sectionTitle } from "./_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const contactBox = (name, icon, info) => {
  return (
    <div
      className={`${name} flex-col flex-1 border m-3 py-5 px-8 text-quaternary`}
    >
      <div className="flex justify-center ">
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      </div>
      <div className="flex text-sm justify-center py-2">{info}</div>
    </div>
  );
};

export default function PageContact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}Contact</title>
      </Head>

      <section>
        {sectionTitle("get in touch")}
        <div className="flex flex-col lg:flex-row my-12">
          {contactBox(
            "address",
            faLocationDot,
            "Indonesia, South Kalimantan, Martapura City 70619"
          )}
          {contactBox("E-Mail", faEnvelope, "ahmadgunawan957@gmail.com")}
          {contactBox("Number", faPhone, "+62 89602774862")}
        </div>
      </section>
    </Layout>
  );
}
