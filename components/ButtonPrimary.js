import Link from "next/link";

const ButtonPrimary = ({ message, url, newTab = false }) => {
  return (
    <div className="ButtonPrimary">
      <Link
        href={url}
        passHref
        className="block bg-primary text-tertiary border-2 border-primary duration-150 py-3 px-5 md:py-4 md:px-6 w-max no-underline hover:bg-tertiary hover:text-primary"
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        {message}
      </Link>
    </div>
  );
};

export default ButtonPrimary;
