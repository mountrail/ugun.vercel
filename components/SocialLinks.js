import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialMedia } from "../pages/_app";

const SocialLinks = () => {
  return (
    <div className="SocialLinks">
      <ul className="flex">
        {socialMedia.map((socmed) => {
          return (
            <li key={socmed.platform} className="mx-1">
              <Link href={socmed.url} target="_blank">
                <FontAwesomeIcon
                  icon={socmed.icon}
                  className="w-4 max-h-4 md:w-6 md:max-h-6"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
