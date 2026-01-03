import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { siteTitle, sectionTitle } from "./_app";

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
      <section>
        {sectionTitle("About Me")}
        <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
          <div className="left lg:w-2/4">
            <p>
              I'm <span className="font-bold">Ahmad Gunawan</span>, a full-stack
              web developer with hands-on experience building production web
              applications with Next.js, WordPress/PHP sites, and frontend
              interfaces. I worked as a Junior Fullstack Web Developer at
              Demand Gen Lab (Jun 2022–Jun 2023 and Dec 2023–Jul 2025) and as
              an online programming tutor at Kodland PTE. LTD (Aug 2023–May
              2024). I enjoy creating web apps, mobile apps, and games—turning
              ideas into working products is what motivates me.
            </p>
            <br />
            <p>
              I also work on visual design (Adobe Photoshop), photo/video
              editing, and data tasks using Excel. Combining design and
              engineering helps me deliver polished, user-focused experiences
              from concept to launch.
            </p>
            <br />
          </div>
          <div className="right lg:w-2/5 mb-5">
            <p>
              I am committed to continuous learning, collaboration, and
              delivering practical, maintainable solutions. Since July 2025 I
              have been a member of the Mobile Brigade Corps, serving in
              national defense and community service roles. That experience
              has strengthened my leadership, teamwork, and problem-solving
              skills under pressure. I have also mentored
              students and competed in provincial web competitions (2nd
              place). My focus is on shipping reliable features, writing
              clear code, and solving real user problems.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
          <div className="left lg:w-2/4">
            <div className="mb-5">{sectionTitle("CAN DO")}</div>

            <ul className={`${utilStyles.triangleBullet} `}>
              <li>Web Developing</li>
              <li>Game Developing</li>
              <li>Mobile App Development</li>
              <li>Photo Editing</li>
              <li>Video Editing</li>
              <li>
                Office Documents {"("}Excel, Word, PowerPoint {")"}
              </li>
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
                time: "Jul 2025 - Dec 2025",
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
                name: "Demand Gen Lab",
                detail: "Work as Junior Fullstack Web Developer",
                time: "Jun 2022 - Jun 2023",
              },
              {
                name: "Kodland PTE. LTD",
                detail: "Online tutor for kids in basic programming",
                time: "Aug 2023 - May 2024",
              },
              {
                name: "Demand Gen Lab",
                detail: "Work as Junior Fullstack Web Developer",
                time: "Dec 2023 - Jul 2025",
              },
              {
                name: "Mobile Brigade Corps",
                detail: "Active member in the organization",
                time: "Dec 2025 - on going",
              },
            ])}
          </div>
        </div>
      </section>
    </Layout>
  );
}
