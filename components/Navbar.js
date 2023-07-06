import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { primaryColor, secondaryColor } from "./layout";

const Navbar = () => {
  const router = useRouter();
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "First Post", path: "/posts/first-post" },
  ];
  return (
    <nav className="flex justify-between align-middle h-16 items-center">
      <Link
        href={"/"}
        className={`logo flex items-center text-${primaryColor} text-lg font-semibold h-full`}
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
                } text-${primaryColor} px-4 h-full inline-block`}
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

export default Navbar;
