import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { siteTitle, sectionTitle } from "./_app";
import AnimatedSection from "../components/AnimatedSection";

export default function PageAbout() {
  const percentageBar = (name, percent) => {
    return (
      <div className="container w-full my-2 ">
        <div className="percentage-bar h-1 relative rounded-full bg-quaternary bg-opacity-30 top-7">
          <div
            className="percentage-bar_fill flex rounded-full relative h-full  items-start justify-between bg-quaternary "
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div
          className="flex justify-between"
          style={{ width: `${percent}%`, minWidth: "40%" }}
        >
          <span>{name}</span>
          <span>{percent}%</span>
        </div>
      </div>
    );
  };

  const timelineList = (lists) => {
    return (
      <ul className={`border-l-2 pl-1 md:pl-5  ${utilStyles.timelineBullet}`}>
        {lists.map((list) => {
          return (
            <li key={list.name} className="flex  ">
              <div className="flex-1">
                <span className=" bg-black bg-opacity-5 text-xs md:text-sm rounded-full py-1 px-4 ">
                  {list.time}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-primary">{list.name}</div>
                <div className="text-sm">{list.detail}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Layout className="mb-8">
      <Head>
        <title>{siteTitle}About</title>
      </Head>
      <AnimatedSection>
        <section>
          {sectionTitle("About Me")}
          <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
            <div className="left lg:w-2/4">
              <p>
                {"I'm"} <span className="font-bold">Ahmad Gunawan</span>. My background is
                mainly built around two areas: <span className="font-bold">IT</span> and
                <span className="font-bold"> policing</span>. I started in computer and
                network engineering at SMKN 1 Martapura, then continued into IT studies
                while gaining practical experience through web development, programming
                tutoring, and freelance or professional projects.
              </p>
              <br />
              <p>
                My work in IT has included junior full-stack web development, working with
                technologies such as HTML, CSS, JavaScript, PHP, WordPress, Next.js, and
                databases. I also have experience with networking, computer systems,
                mobile applications, game development, photo and video editing, and
                general technical problem-solving. In 2021, I also placed 2nd in a
                province-level Web Technology Competition.
              </p>
              <br />
              <p>
                In 2025, I took a different path and joined the Indonesian National Police
                as a member of Brimob. Since then, I've gone through basic police
                formation and Brimob specialist training, followed by field and capability
                training. This gave me experience in an environment very different from
                software development, including discipline, physical training, teamwork,
                field operations, communications, and tactical skills.
              </p>
              <br />
            </div>

            <div className="right lg:w-2/5 mb-5">
              <p>
                In August 2026, I was assigned to the TIK Division of the 1st Regiment of
                Brimob in Bogor, bringing my previous IT experience back into my current
                work. My role now combines the technical side I've been building since
                school with the experience I've gained through police and Brimob training.
              </p>
              <br />
              <p>
                I don't consider myself an expert in everything I do. My experience is
                simply the result of having spent several years working with technology
                and, more recently, training and working as part of Brimob. These are two
                very different skill sets, but both have become useful parts of what I can
                do.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section>
          <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
            <div className="left lg:w-2/4">
              <div className="mb-5">{sectionTitle("CAN DO")}</div>

              <ul className={`${utilStyles.triangleBullet} `}>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Game Development</li>
                <li>Computer & Network Setup</li>
                <li>Radio & Communication Equipment</li>
                <li>CCTV Installation</li>
                <li>Photo & Video Editing</li>
                <li>Office Documents (Excel, Word, PowerPoint)</li>
                <li>Field & Tactical Training</li>
              </ul>
              <br />
            </div>
            <div className="right lg:w-2/5">
              <div className="mb-5">{sectionTitle("INTERESTS")}</div>
              <ul className={`${utilStyles.triangleBullet} `}>
                <li>Desktop PC</li>
                <li>Home Workouts</li>
                <li>Film and Cinema</li>
                <li>Video Gaming</li>
                <li>
                  Music {"("}Singing and Guitar{")"}
                </li>
                <li>Badminton</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section>
          <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
            <div className="left lg:w-2/4">
              <div className="mb-5">{sectionTitle("programming")}</div>
              <ul>
                <li>{percentageBar("HTML", 100)}</li>
                <li>{percentageBar("CSS", 85)}</li>
                <li>{percentageBar("Javascript", 60)}</li>
                <li>{percentageBar("Next.JS", 60)}</li>
                <li>{percentageBar("Wordpress", 70)}</li>
                <li>{percentageBar("PHP", 50)}</li>
                <li>{percentageBar("Python", 40)}</li>
                <li>{percentageBar("MySql", 40)}</li>
              </ul>
              <br />
            </div>
            <div className="right lg:w-2/5">
              <div className="mb-5">{sectionTitle("languages")}</div>
              <ul>
                <li>{percentageBar("Indonesian", 100)}</li>
                <li>{percentageBar("English", 80)}</li>
                <li>{percentageBar("German", 10)}</li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section>
          <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
            <div className="left lg:w-2/4">
              <div className="mb-5">{sectionTitle("education")}</div>

              {timelineList([
                {
                  name: "SMKN 1 Martapura",
                  detail: "Majoring in computer and network engineering",
                  time: "2019 - 2022",
                },
                {
                  name: "STMIK Banjarbaru",
                  detail: "IT major",
                  time: "2023 - 2024",
                },
                {
                  name: "Sekolah Polisi Negara Polda Kalimantan Selatan",
                  detail: "Pendidikan Pembentukan Tamtama",
                  time: "30 Jul 2025 - 24 Dec 2025",
                },
                {
                  name: "Pusat Pendidikan Brimob Watukosek",
                  detail: "Pendidikan & Pengembangan Spesialisasi Brimob (DASMOB 2000)",
                  time: "13 Jan 2026 - 13 Mar 2026",
                },
                {
                  name: "Satuan Latihan Brimob Cikeas",
                  detail: "Pelatihan Pembinaan Kemampuan Brimob",
                  time: "14 Mar 2026 - 5 May 2026",
                },
              ])}
              <br />
            </div>
            <div className="right lg:w-2/5">
              <div className="mb-5">{sectionTitle("experience")}</div>
              {timelineList([
                {
                  name: "High School Province level Web Technology Competition 2021",
                  detail: "won 2nd Place",
                  time: "Aug 2021",
                },
                {
                  name: "PENULIS.ID",
                  detail: "Work as Junior Fullstack Web Developer",
                  time: "Jun 2022 - Jun 2023",
                },
                {
                  name: "KODLAND PTE. LTD",
                  detail: "Online tutor for kids in basic programming",
                  time: "Aug 2023 - May 2024",
                },
                {
                  name: "DEMAND GEN LAB",
                  detail: "Work as Junior Fullstack Web Developer",
                  time: "Dec 2023 - Jul 2025",
                },
                {
                  name: "MOBILE BRIGADE CORPS (BRIMOB)",
                  detail: "Active member in the organization",
                  time: "Dec 2025 - on going",
                },
                {
                  name: "BRIMOB TIK DIVISION",
                  detail: "IT Specialist at 1st Regiment of Mobile Brigade Corps Kedung Halang, Bogor",
                  time: "7 Aug 2026 - on going",
                },
              ])}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}