import Link from "next/link";

const Navbar = () => {
  return (
      <div className="p-4">
        <nav>
          <ul className="flex">
            <li className="p-4">
              <Link href="/">
                <button>Home</button>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/posts/first-post">
                <button>First Post</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
