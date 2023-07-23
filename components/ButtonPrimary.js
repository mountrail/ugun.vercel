import Link from "next/link";

const ButtonPrimary = ({ message, url }) => {
  return (
    <div className="ButtonPrimary">
      <Link
        href={url}
        className="block bg-primary text-tertiary border-2 border-primary duration-150 py-3 px-5 md:py-4 md:px-6 w-max no-underline hover:bg-tertiary hover:text-primary"
      >
        {message}
      </Link>
    </div>
  );
};

export default ButtonPrimary;
