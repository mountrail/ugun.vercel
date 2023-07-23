import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./BottomNavbar.module.css";
import { menus, navbarHeight } from "../pages/_app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./MainFooter";

const BottomNavbar = () => {
  const router = useRouter();
  return (
    <nav
      className={`flex flex-col md:hidden bg-secondary fixed inset-x-0 bottom-0 px-sm md:px-md`}
      style={{
        height: navbarHeight,
      }}
    >
      <ul className={`flex flex-1 justify-between items-center`}>
        {menus.map((menu) => {
          return (
            <li key={menu.name.toLowerCase()} className=" flex-1  h-full">
              <Link
                href={menu.path}
                className={`${
                  router.pathname === menu.path ? styles.active : ""
                } flex flex-col text-primary px-1 no-underline h-full justify-center hover:border-2`}
              >
                <div className={`flex justify-center`}>
                  <FontAwesomeIcon
                    className={`w-5 max-h-5 ${
                      router.pathname === menu.path ? "text-secondary" : ""
                    }`}
                    icon={menu.icon}
                  />
                </div>
                <div
                  className={`${
                    router.pathname === menu.path ? styles.active : ""
                  } flex text-xs justify-center`}
                  style={{ fontSize: "8px" }}
                >
                  {menu.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavbar;
