import { footerHeight } from "../pages/_app";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={` md:flex bg-secondary justify-between items-center fixed md:inset-x-0 md:bottom-0 px-sm md:px-md`}
      style={{ height: footerHeight }}
    >
      <div>ugun &copy; {currentYear}</div>
      <div className="ml-auto">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
