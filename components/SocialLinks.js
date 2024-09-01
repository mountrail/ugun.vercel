import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialMedia } from "../pages/_app";

const SocialLinks = () => {
  return (
    <div className="SocialLinks">
      <ul className="flex">
        {socialMedia.map((socmed) => {
          return (
            <li key={socmed.platform} className="relative mx-1 group">
              <Link href={socmed.url} target="_blank">
                <FontAwesomeIcon
                  icon={socmed.icon}
                  className="w-4 max-h-4 md:w-6 md:max-h-6"
                />
                {/* Tooltip */}
                <span className="absolute md:bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-secondary bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {socmed.platform.charAt(0).toUpperCase() + socmed.platform.slice(1)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
