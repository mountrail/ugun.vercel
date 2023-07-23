import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./TopNavbar.module.css";
import { menus, navbarHeight } from "../pages/_app";
import Footer from "./MainFooter";
import SocialLinks from "./SocialLinks";

const TopNavbar = () => {
  const router = useRouter();

  return (
    <nav
      className={`${styles.navbar} flex fixed bg-secondary justify-between align-middle items-center inset-x-0 top-0 px-sm md:px-md`}
      style={{
        height: navbarHeight,
      }}
    >
      <Link
        href={"/"}
        className={`logo flex items-center text-primary text-lg font-semibold h-full`}
      >
        PORTFOLIO
      </Link>
      <ul className={`hidden md:flex`}>
        {menus.map((menu) => {
          return (
            <li key={menu.name.toLowerCase()} className="leading-9">
              <Link
                href={menu.path}
                className={`${styles.navLink} ${
                  router.pathname === menu.path ? styles.active : ""
                } text-primary px-4 h-full inline-block`}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex md:hidden">
        <SocialLinks />
      </div>
    </nav>
  );
};

export default TopNavbar;
