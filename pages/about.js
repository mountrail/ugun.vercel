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
        <title>{siteTitle}</title>
      </Head>
      <section>
        {sectionTitle("About Me")}
        <div className="flex wrap pt-5 lg:flex-row flex-col text-quaternary justify-between">
          <div className="left lg:w-2/4">
            <p>
              My name is <span className="font-bold">Ahmad Gunawan</span>, and I
              am a passionate and dedicated programmer. I have a strong interest
              in web development, and it is my primary focus. However, I also
              enjoy exploring new avenues, such as creating apps and games. I
              find joy in the process of bringing ideas to life through coding
              and leveraging my creativity.
            </p>
            <br />
            <p>
              Aside from programming, I have skills in graphic design,
              specifically in Photoshop. I love utilizing my design skills to
              create visually appealing and engaging content. Additionally, I am
              proficient in using Excel, harnessing its power to analyze and
              organize data effectively.
            </p>
            <br />
          </div>
          <div className="right lg:w-2/5 mb-5">
            <p>
              With a combination of technical expertise and a continuous desire
              to learn, I am committed to delivering high-quality solutions and
              improving my skills as a developer. I thrive in collaborative
              environments and enjoy working with others to bring innovative
              ideas to fruition. Programming is not just a profession for me; it
              is a passion that drives me to constantly push my boundaries and
              create meaningful experiences through technology.
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
              <li>{percentageBar("HTML", 95)}</li>
              <li>{percentageBar("CSS", 75)}</li>
              <li>{percentageBar("Javascript", 60)}</li>
              <li>{percentageBar("Next.JS", 55)}</li>
              <li>{percentageBar("Wordpress", 50)}</li>
              <li>{percentageBar("PHP", 35)}</li>
              <li>{percentageBar("Python", 30)}</li>
              <li>{percentageBar("MySql", 40)}</li>
            </ul>
            <br />
          </div>
          <div className="right lg:w-2/5">
            <div className="mb-5">{sectionTitle("languages")}</div>
            <ul>
              <li>{percentageBar("Indonesian", 95)}</li>
              <li>{percentageBar("English", 70)}</li>
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
                time: "2023 - on going",
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
                time: "2021",
              },
              {
                name: "Demand Gen Lab",
                detail: "Work as Junior Fullstack Web Developer",
                time: "2022 - 2023",
              },
            ])}
          </div>
        </div>
      </section>
    </Layout>
  );
}
