import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./BottomNavbar.module.css";
import { paddingX } from "./layout";

const BottomNavbar = ({ height }) => {
  const router = useRouter();
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "First Post", path: "/posts/first-post" },
  ];
  return (
    <nav
      className={`${styles.navbar} flex fixed bg-secondary justify-between align-middle items-center inset-x-0 top-0`}
      style={{
        height: height,
        paddingLeft: `${paddingX}`,
        paddingRight: `${paddingX}`,
      }}
    >
      <Link
        href={"/"}
        className={`logo flex items-center text-primary text-lg font-semibold h-full`}
      >
        PORTFOLIO
      </Link>
      <ul className="flex">
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
    </nav>
  );
};

export default BottomNavbar;
