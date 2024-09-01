import "../styles/global.css";

// images
const imagePath = "/public/images/";
export const imageList = [
  {
    img: `${imagePath}anakmarketing.png`,
    title: "Marketing Strategy",
    description: "An effective marketing strategy for your business."
  },
  {
    img: `${imagePath}demandgenlab.png`,
    title: "Demand Generation",
    description: "Boost your leads with demand generation tactics."
  },
  // Add more images as needed
];

// icons
import {
  faHome,
  faUser,
  faBriefcase,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const siteTitle = "Ugun | ";
export const fullName = "Ahmad Gunawan";
export const menus = [
  { name: "Home", path: "/", icon: faHome },
  { name: "About", path: "/about", icon: faUser },
  { name: "Portfolio", path: "/portfolio", icon: faBriefcase },
  { name: "Contact", path: "/contact", icon: faAddressCard },
  // { name: "First Post", path: "/posts/first-post", icon: faFolder },
];
export const socialMedia = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ugun/",
    icon: faLinkedin,
  },
  {
    platform: "facebook",
    url: "https://web.facebook.com/itguns",
    icon: faFacebook,
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/itgun/",
    icon: faInstagram,
  },
];
export const navbarHeight = "60px";
export const footerHeight = "60px";
// export const footerHeightSm = "10px";

export const sectionTitle = (title) => {
  return (
    <div
      className="flex font-bold w-auto items-center justify-center "
      style={{ letterSpacing: "8px" }}
    >
      <div className="uppercase text-primary">{title}</div>
      <div className="h-0.5 ml-5 w-max bg-quaternary flex-auto"></div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
